"use client";

import React from "react";
import styles from "./navigation.module.css";
import BurgerMenu from "../../atoms/icon/burger-menu/burger-menu";
import Search from "../../atoms/icon/search/search";
import User from "../../atoms/icon/user/user";
import Spotlight from "@/components/molecules/spotlight/spotlight";
import Tooltip from "@/components/molecules/tooltip/tooltip";
import { useSpotlightContext } from "@/components/molecules/spotlight/spotlight-context";

export interface NavigationProps {}

const Navigation = () => {
  const { prevStep, nextStep, state } = useSpotlightContext();

  const TooltipContent = () => {
    return (
      <div className={styles.tooltipContentContainer}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit qui officia.</div>
        <div className={styles.tooltipContentNavigation}>
          <span onClick={prevStep}>Back</span>
          <span onClick={nextStep}>Next</span>
        </div>
      </div>
    );
  };

  return (
    <nav className={styles.component}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <Spotlight isActive={true} order={1}>
            <Tooltip content={<TooltipContent />} isDefaultOpen={state.currentStep === 1} triggerType="Click" placement="right">
              <BurgerMenu />
            </Tooltip>
          </Spotlight>
        </div>
        <div className={styles.rightMenu}>
          <Spotlight order={2}>
            <Tooltip content={<TooltipContent />} isDefaultOpen={state.currentStep === 2} triggerType="Click">
              <Search />
            </Tooltip>
          </Spotlight>
          <Spotlight order={3}>
            <Tooltip content={<TooltipContent />} isDefaultOpen={state.currentStep === 3} triggerType="Click">
              <User />
            </Tooltip>
          </Spotlight>
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;

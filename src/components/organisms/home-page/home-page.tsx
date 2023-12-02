"use client";

import React from "react";
import styles from "./home-page.module.css";
import ParseWord from "@/components/utilities/parse-word/parse-word";
import Spotlight from "@/components/molecules/spotlight/spotlight";
import Tooltip from "@/components/molecules/tooltip/tooltip";
import { useTutorialContext } from "@/components/utilities/tutorial-context/tutorial-context";
import classnames from "classnames";

export interface HomePageProps {}

const Homepage = ({}: HomePageProps) => {
  const { prevStep, nextStep, state } = useTutorialContext();

  const TooltipContent = () => {
    return (
      <div className={styles.tooltipContentContainer}>
        <span>Step {state.currentStep}</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reprehenderit qui officia. </p>

        <div className={styles.tooltipContentNavigation}>
          <span
            className={classnames(styles.back, {
              [styles.isHidden]: state.currentStep === 1,
            })}
            onClick={prevStep}
          >
            Back
          </span>

          <span
            className={classnames(styles.next, {
              [styles.isHidden]: state.currentStep === state.maxStep,
            })}
            onClick={nextStep}
          >
            Next
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.component}>
      <div className={styles.headline}>
        <ParseWord
          elements={[
            <Spotlight key={1} order={4}>
              <Tooltip className={styles.tooltip} content={<TooltipContent />} isDefaultOpen={state.currentStep === 4} triggerType="Click">
                Text One
              </Tooltip>
            </Spotlight>,
            <Spotlight key={2} order={5}>
              <Tooltip className={styles.tooltip} content={<TooltipContent />} isDefaultOpen={state.currentStep === 5} triggerType="Click">
                Text Two
              </Tooltip>
            </Spotlight>,
            <Spotlight key={3} order={6}>
              <Tooltip className={styles.tooltip} content={<TooltipContent />} isDefaultOpen={state.currentStep === 6} triggerType="Click">
                Text Three
              </Tooltip>
            </Spotlight>,
          ]}
          text="Choose Your First Text %first%, Choose Your Second Text %second%, Choose Your Third Text %third%"
          wordKeys={["%first%", "%second%", "%third%"]}
        />
      </div>
    </div>
  );
};

Homepage.displayName = "Homepage";

export default Homepage;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, ReactNode, useEffect, useState } from "react";
import styles from "./spotlight.module.css";
import ScrollLock from "@/components/utilities/scroll-lock/ScrollLock";
import { useTutorialContext } from "@/components/utilities/tutorial-context/tutorial-context";

export interface SpotlightProps {
  children?: ReactNode;
  isActive?: boolean;
  order: number;
}

const Spotlight = ({ children, isActive = true, order }: SpotlightProps) => {
  const [isOpen, setIsOPen] = useState(isActive);
  const { state } = useTutorialContext();

  useEffect(() => {
    setIsOPen(state.currentStep === order);
  }, [state.currentStep, order]);

  return (
    <div className={styles.component}>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <Fragment>
            <ScrollLock />

            <motion.div
              key="spotlight-background"
              animate={{ opacity: 1 }}
              className={styles.spotlightBackground}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: "1" }}
            ></motion.div>

            <div className={styles.spotlight}>
              <div className={styles.blur}>{children}</div>
            </div>
          </Fragment>
        ) : (
          children
        )}
      </AnimatePresence>
    </div>
  );
};

Spotlight.displayName = "Spotlight";

export default Spotlight;

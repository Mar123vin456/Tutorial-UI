"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Fragment, ReactNode } from "react";
import styles from "./spotlight.module.css";
import ScrollLock from "@/components/utilities/scroll-lock/ScrollLock";

export interface SpotlightProps {
  children?: ReactNode;
  isActive?: boolean;
}

const Spotlight = ({ children, isActive = true }: SpotlightProps) => {
  return (
    <div className={styles.component}>
      <AnimatePresence>
        {isActive ? (
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

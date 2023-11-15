"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styles from "./tooltip.module.css";
import classNames from "classnames";

type Placement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
  content?: React.ReactNode | string;
  onClick?: (isOpen: boolean) => void;
  placement?: Placement;
  popperClassName?: string;
  popperOffset?: [number, number];
  triggerClassName?: string;
  triggerType?: "Hover" | "Click";
}

const Tooltip = ({
  children,
  className,
  content,
  popperClassName,
  popperOffset = [8, 8],
  triggerClassName,
  triggerType = "Hover",
  placement = "bottom",
  onClick,
}: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: popperOffset,
        },
      },
      {
        enabled: true,
        name: "flip",
        options: {
          fallbackPlacements: ["bottom", "top", "right", "left"],
        },
      },
      { name: "arrow", options: { element: arrowElement } },
    ],
    placement: placement,
    strategy: "fixed",
  });

  const ref = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const close = React.useCallback(() => {
    if (triggerType === "Hover") {
      setIsOpen(false);
    }
  }, [triggerType]);

  const open = React.useCallback(() => {
    if (triggerType === "Hover") {
      setIsOpen(true);
    }
  }, [triggerType]);

  const toggle = React.useCallback(() => {
    if (triggerType === "Click") {
      setIsOpen((prevState) => !prevState);
    }
  }, [triggerType]);

  useEffect(() => {
    if (onClick) {
      onClick(isOpen);
    }
  }, [isOpen, onClick]);

  return (
    <div ref={ref} className={classNames(className, styles.component)} onMouseLeave={close}>
      <button ref={setReferenceElement} className={classNames(styles.buttonTrigger, triggerClassName)} onClick={toggle} onMouseEnter={open} type="button">
        {children}
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <div ref={setPopperElement} className={classNames(popperClassName, styles.popperContainer)} style={popperStyles.popper} {...attributes.popper}>
            <motion.div
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className={styles.box}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{ duration: 0.1 }}
            >
              <div className={styles.boxInner}>{content}</div>
              <div ref={setArrowElement} className={styles.arrow} style={popperStyles.arrow} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;

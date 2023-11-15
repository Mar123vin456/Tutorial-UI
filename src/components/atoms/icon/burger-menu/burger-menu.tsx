import React from "react";
import styles from "./burger-menu.module.css";

export interface BurgerMenuProps {}

const BurgerMenu = ({}: BurgerMenuProps) => {
  return (
    <div className={styles.component}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5H21" stroke="#272A44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 12L21 12" stroke="#272A44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 19L21 19" stroke="#272A44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
};

BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;

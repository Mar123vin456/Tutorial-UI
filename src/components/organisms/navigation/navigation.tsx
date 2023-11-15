import React from "react";
import styles from "./navigation.module.css";
import BurgerMenu from "../../atoms/icon/burger-menu/burger-menu";
import Search from "../../atoms/icon/search/search";
import User from "../../atoms/icon/user/user";
import Spotlight from "@/components/molecules/spotlight/spotlight";
import Tooltip from "@/components/molecules/tooltip/tooltip";

export interface NavigationProps {}

const Navigation = () => {
  return (
    <nav className={styles.component}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <Spotlight isActive={true}>
            <Tooltip content={"test"}>
              <BurgerMenu />
            </Tooltip>
          </Spotlight>
        </div>
        <div className={styles.rightMenu}>
          <Search />
          <User />
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;

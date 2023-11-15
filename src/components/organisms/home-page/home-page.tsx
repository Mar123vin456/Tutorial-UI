import React from "react";
import styles from "./home-page.module.css";

export interface HomePageProps {}

const Homepage = ({}: HomePageProps) => {
  return <div className={styles.component}>Hello world</div>;
};

Homepage.displayName = "Homepage";

export default Homepage;

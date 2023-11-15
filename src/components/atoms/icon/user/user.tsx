import React from "react";
import styles from "./user.module.css";

export interface UserProps {}

const User = ({}: UserProps) => {
  return (
    <div className={styles.component}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.9972 3C11.1073 3.00056 10.2376 3.26493 9.49798 3.75969C8.75835 4.25446 8.18201 4.9574 7.84182 5.77966C7.50164 6.60192 7.41287 7.50659 7.58674 8.37929C7.76062 9.25199 8.18933 10.0536 8.81869 10.6826C9.44804 11.3117 10.2498 11.7401 11.1226 11.9136C11.9953 12.0871 12.9 11.998 13.7221 11.6575C14.5442 11.3169 15.2469 10.7403 15.7414 10.0005C16.2358 9.26062 16.4998 8.3908 16.5 7.50094C16.5001 6.90968 16.3837 6.32418 16.1575 5.77792C15.9312 5.23167 15.5995 4.73535 15.1813 4.31735C14.7631 3.89935 14.2667 3.56786 13.7203 3.34182C13.174 3.11578 12.5884 2.99963 11.9972 3V3Z"
          stroke="#272A44"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 21V20.0001C20 17.7909 18.2092 16.0001 16 16.0001L8.00002 16C5.79088 16 4 17.7909 4 20V21"
          stroke="#272A44"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

User.displayName = "User";

export default User;

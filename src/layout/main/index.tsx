import React from "react";
import styles from "./styles.module.styl";

const Main: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Main;

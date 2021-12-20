import React from "react";
import styles from "./Center.module.scss";

export default function Center({ children }) {
  return <div className={`${styles.center}`}>{children}</div>;
}

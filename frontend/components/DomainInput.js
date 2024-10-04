import React from "react";
import styles from "../styles/Home.module.css";

const DomainInput = ({ domain, setDomain }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={domain}
      placeholder="Enter domain (e.g., example.com)"
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default DomainInput;

import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({ text, type = "button", url }) => {
  if (url) {
    return (
      <Link href={url} className={styles.container}>
        {text}
      </Link>
    );
  }

  return (
    <button className={styles.container} type={type}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import styles from "./styles.module.styl";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "inherit";
}

const Button: React.FC<Props> = ({
  fullWidth,
  size = "medium",
  color = "inherit",
  disabled,
  children,
  ...other
}) => {
  const classes = `${styles.root} ${fullWidth && "fullWidth"} ${
    size === "small" && styles.small
  } ${styles[color]} ${disabled && styles.disabled}`;
  return (
    <button type="button" className={classes} {...other}>
      {children}
    </button>
  );
};

export default Button;

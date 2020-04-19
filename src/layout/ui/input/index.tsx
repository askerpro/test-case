import React from "react";
import styles from "./styles.module.styl";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  value: string;
  label: string;
}

const Button: React.FC<Props> = ({
  fullWidth,
  label,
  value,
  onChange,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <div className={styles.root}>
      <label
        className={`${styles.label} ${(isFocused || value) && styles.shrink}`}
      >
        {label}
      </label>
      <div className={`${styles["input-root"]} ${isFocused && styles.focused}`}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Button;

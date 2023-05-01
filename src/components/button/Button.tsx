import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  );
};

export default Button;

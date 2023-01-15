import { FC, ReactNode } from "react";
import Styles from "./button.module.scss";

interface ButtonProps {
  type?: "primary" | "secondary" | "light";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ type, children }) => {
  const getType = () => {
    if (type === "secondary") return Styles.secundary;
    else if (type === "light") return Styles.light;
    return Styles.primary;
  };
  return (
    <button className={`${Styles.button} ${getType()}`}>{children}</button>
  );
};

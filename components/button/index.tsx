import { FC, ReactNode } from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "light";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ type, children }) => {
  return <button></button>;
};

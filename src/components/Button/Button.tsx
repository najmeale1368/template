import { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonProps {
  label?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className="btn">{label}</button>;
};

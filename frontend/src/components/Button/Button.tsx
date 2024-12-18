import React from "react";

import "./Button.css";

interface ButtonProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};

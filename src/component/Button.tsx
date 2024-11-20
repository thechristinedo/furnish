import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button type="button" className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;

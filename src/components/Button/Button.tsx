import { FC } from "react";

import { IButtonProps } from "./Button.interfaces";
import { StyledButton } from "./Button.styled";

const Button: FC<IButtonProps> = ({ label, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className} data-testid="button">
      {label}
    </StyledButton>
  );
};

export default Button;

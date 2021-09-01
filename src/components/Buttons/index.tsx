//Dependencies
import { ReactElement, MouseEventHandler } from "react";

//Styles
import * as S from "./style";

const Button = ({
  children,
  onClick,
  state,
}: {
  children: string | ReactElement;
  onClick: MouseEventHandler;
  state: boolean;
}) => {
  return (
    <S.ButtonBody onClick={onClick} state={state}>
      {children}
    </S.ButtonBody>
  );
};

export default Button;

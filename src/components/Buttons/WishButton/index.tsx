//Dependencies
import { MouseEventHandler } from "react";

//Assets
import HeartIcon from "assets/Icons/HeartIcon";

//Styles
import * as S from "./style";

const WishButton = ({
  onClick,
  state,
}: {
  onClick: MouseEventHandler;
  state: boolean;
}) => {
  return (
    <S.WishButtonStyled onClick={onClick} state={state}>
      <HeartIcon />
    </S.WishButtonStyled>
  );
};

export default WishButton;

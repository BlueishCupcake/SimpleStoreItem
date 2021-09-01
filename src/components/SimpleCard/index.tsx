//Dependencies
import { useState } from "react";

//Assets
import CheckIcon from "assets/Icons/CheckIcon";

//components
import Button from "components/Buttons/AddCartButton";
import WishButton from "components/Buttons/WishButton";

//Styles
import * as S from "./style";

interface CardProps {
  img: string;
  name: string;
  price: number;
  currentPrice: number;
  displayInstallmentPrice: number;
}

const SimpleCard = ({ item }: { item: CardProps }) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);
  const [wishList, setWishList] = useState<boolean>(false);

  const numberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const onClickHandler = () => {
    setSelectedButton(!selectedButton);
  };

  const wishListClickHandler = () => {
    setWishList(!wishList);
  };

  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <WishButton onClick={wishListClickHandler} state={wishList} />

        <S.ProductImg src={item.img} alt="Product Image" />
      </S.ImageWrapper>

      <S.InfoWrapper>
        <S.ProductTitle>{item.name}</S.ProductTitle>

        <S.FullPriceStyled>{numberFormat.format(item.price)}</S.FullPriceStyled>

        <S.CurrentPriceStyled>
          {numberFormat.format(item.currentPrice)}
        </S.CurrentPriceStyled>

        <S.PaymentOptions>
          em até 10x de{" "}
          <span>{numberFormat.format(item.displayInstallmentPrice)} </span>
          sem juros
        </S.PaymentOptions>
      </S.InfoWrapper>

      <Button onClick={onClickHandler} state={selectedButton}>
        {!selectedButton ? (
          "Adicionar"
        ) : (
          <>
            <CheckIcon /> Adicionado
          </>
        )}
      </Button>
    </S.CardContainer>
  );
};

export default SimpleCard;

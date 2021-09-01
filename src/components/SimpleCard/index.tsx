//Dependencies
import { useState } from "react";

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

  const onClickHandler = () => {
    setSelectedButton(!selectedButton);
  };

  const wishListClickHandler = () => {
    setWishList(!wishList);
  };

  return (
    <S.CardContainer>
      <WishButton onClick={wishListClickHandler} state={wishList} />
      <S.ProductImg src={item.img} alt="Product Image" />
      <S.ProductTitle>{item.name}</S.ProductTitle>
      <S.FullPriceStyled>R$ {item.price}</S.FullPriceStyled>
      <S.CurrentPriceStyled>R$ {item.currentPrice}</S.CurrentPriceStyled>
      <S.PaymentOptions>
        em até 10x de R$ {item.displayInstallmentPrice} sem juros
      </S.PaymentOptions>
      <Button onClick={onClickHandler} state={selectedButton}>
        {!selectedButton ? (
          "Adicionar"
        ) : (
          <>
            <img src="/Vector.svg" /> Adicionado
          </>
        )}
      </Button>
    </S.CardContainer>
  );
};

export default SimpleCard;

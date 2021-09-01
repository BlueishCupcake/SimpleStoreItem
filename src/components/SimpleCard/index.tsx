//Styles
import * as S from "./style";

const SimpleCard = () => {
  const cards = [
    {
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2813.99,
      currentPrice: 2599.0,
      displayInstallmentPrice: 259.9,
      img: "/first-screen.png",
    },
    {
      name: "Monitor Gamer LG 25UM58G 25” LED IPS",
      price: 1599.0,
      currentPrice: 899.0,
      displayInstallmentPrice: 109.9,
      img: "/second-screen.jpg",
    },
  ];

  return (
    <>
      {cards.map((item) => {
        return (
          <S.CardContainer>
            <S.ProductImg src={item.img} alt="Product Image" />
            <S.ProductTitle>{item.name}</S.ProductTitle>
            <S.FullPriceStyled>R$ {item.price}</S.FullPriceStyled>
            <S.CurrentPriceStyled>R$ {item.currentPrice}</S.CurrentPriceStyled>
            <S.PaymentOptions>
              em até 10x de R$ {item.displayInstallmentPrice} sem juros
            </S.PaymentOptions>
          </S.CardContainer>
        );
      })}
    </>
  );
};

export default SimpleCard;

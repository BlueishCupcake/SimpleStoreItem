import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  width: 304px;
  height: 568px;
  background-color: #fff;
  border-radius: 8px;
  font-family: Inter;
  font-style: normal;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  place-content: center;
  place-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  place-items: flex-start;
  padding: 0 32px;
`;

export const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ProductTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-top: 32px;
  height: 60px;
`;

export const FullPriceStyled = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.005em;
  text-decoration-line: line-through;
  color: #b5b5b6;
  margin-top: 24px;
`;

export const CurrentPriceStyled = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.005em;
  margin: 4px 0;
  color: #da4b4f;
`;

export const PaymentOptions = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: #848587;
  margin-bottom: 32px;

  span {
    color: #000;
  }
`;

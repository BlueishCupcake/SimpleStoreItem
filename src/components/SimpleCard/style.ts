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

export const ProductTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const ProductImg = styled.img`
  width: 240px;
  height: 240px;
`;

export const FullPriceStyled = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.005em;
  text-decoration-line: line-through;
  color: #b5b5b6;
`;

export const CurrentPriceStyled = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #da4b4f;
`;

export const PaymentOptions = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: #848587;
`;

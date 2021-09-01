import styled from "styled-components";

interface ButtonProps {
  state: boolean;
}

export const WishButtonStyled = styled.button<ButtonProps>`
  display: flex;
  place-content: center;
  place-items: center;
  background-color: ${({ state }) => (!state ? "#f2f3f6" : "#DA4B4F")};
  border-radius: 100%;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: 0.3s;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  svg {
    transition: 0.3s;
    fill: ${({ state }) => (!state ? "transparent" : "#fff")};
    stroke: ${({ state }) => (!state ? "#000" : "#fff")};
  }

  &:hover {
    background-color: ${({ state }) => (!state ? "#fee5ec" : "#C22539")};
    svg {
      stroke: ${({ state }) => (!state ? "#da4b4f" : "#fff")};
    }
  }
`;

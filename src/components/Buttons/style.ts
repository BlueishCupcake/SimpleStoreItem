import styled from "styled-components";

interface ButtonProps {
  state: boolean;
}

export const ButtonBody = styled.button<ButtonProps>`
  width: 240px;
  height: 48px;
  background: ${({ state }) => (!state ? "#40b25c" : "#a3f9b9")};
  border: none;
  border-radius: 5px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${({ state }) => (!state ? "#fff" : "#000")};

  letter-spacing: -0.005em;
  text-transform: uppercase;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #1c6c3e;
    color: #fff;
  }
`;

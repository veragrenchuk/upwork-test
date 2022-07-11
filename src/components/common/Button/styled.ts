import { convertStyles } from "helpers/convertStyles";
import styled from "styled-components";
import { ButtonProps } from "./types";

const Button = styled.button<ButtonProps>`
  color: #fff;

  background-color: #4d4db4;

  padding: 20px 30px;

  border: none;
  border-radius: 15px;

  cursor: pointer;

  font-weight: 600;

  display: block;

  ${({ styles }) => styles && convertStyles(styles)}
`;

const S = {
  Button,
};

export default S;

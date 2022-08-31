import React from "react";
import styled, { css } from "styled-components";

const ButtonStyle = styled.div`
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  ${(props) =>
    props.kind === "primary" &&
    css`
      background-color: rgba(23, 36, 32, 0.8);
      opacity: 0.85;
      color: white;
    `};
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      opacity: 0.65;
      color: black;
    `};
`;

const Button = ({ children, kind = "primary", className = "" }) => {
  return (
    <ButtonStyle kind={kind} className={className}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

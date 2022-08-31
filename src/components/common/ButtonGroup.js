import React from "react";
import styled from "styled-components";

const ButtonGroupStyle = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function ButtonGroup({ children }) {
  return <ButtonGroupStyle>{children}</ButtonGroupStyle>;
}

export default ButtonGroup;

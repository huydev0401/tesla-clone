import React from "react";
import styled from "styled-components";

const DownArrowStyle = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s linear;
`;

function DownArrow() {
  return <DownArrowStyle src="./down-arrow.svg"></DownArrowStyle>;
}

export default DownArrow;

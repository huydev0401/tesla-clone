import React from "react";
import styled from "styled-components";

const SectionWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 36, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)``;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`;

function Section() {
  return (
    <SectionWrap>
      <Heading>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </Heading>
      <Bottom>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="./down-arrow.svg" />
      </Bottom>
    </SectionWrap>
  );
}

export default Section;

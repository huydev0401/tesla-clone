import React from "react";
import styled from "styled-components";

const SectionWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./model-s.jpg");
  background-image: ${(props) => `url("${props.bgImage}")`};
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s linear;
`;

const Bottom = styled.div``;

function Section({ title, desc, backgroundImg, leftBtn, rightBtn }) {
  return (
    <SectionWrap bgImage={backgroundImg}>
      <Heading>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Heading>
      <Bottom>
        <ButtonGroup>
          <LeftButton>{leftBtn}</LeftButton>
          <RightButton>{rightBtn}</RightButton>
        </ButtonGroup>
        <DownArrow src="./down-arrow.svg" />
      </Bottom>
    </SectionWrap>
  );
}

export default Section;

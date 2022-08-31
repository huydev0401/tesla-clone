import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Heading from "./common/Heading";
import Button from "./common/Button";
import ButtonGroup from "./common/ButtonGroup";
import DownArrow from "./common/DownArrow";

const SectionWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div``;

function Section({ title, desc, backgroundImg, leftBtn, rightBtn }) {
  return (
    <SectionWrap bgImage={backgroundImg}>
      <Fade bottom>
        <Heading title={title} desc={desc}></Heading>
      </Fade>
      <Bottom>
        <Fade bottom>
          <ButtonGroup>
            <Button>{leftBtn}</Button>
            {rightBtn && <Button kind="secondary">{rightBtn}</Button>}
          </ButtonGroup>
        </Fade>
        <DownArrow />
      </Bottom>
    </SectionWrap>
  );
}

export default Section;

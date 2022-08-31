import React from "react";
import styled from "styled-components";

const SectionWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./model-s.jpg");
`;

function Section() {
  return (
    <SectionWrap>
      <Heading>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </Heading>
    </SectionWrap>
  );
}

export default Section;

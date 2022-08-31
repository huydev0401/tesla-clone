import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImg="./model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      ></Section>
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImg="./model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      ></Section>
    </Container>
  );
}

export default Home;

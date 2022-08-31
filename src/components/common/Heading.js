import React from "react";
import styled from "styled-components";

const HeadingContent = styled.div`
  padding: 15vh;
  text-align: center;
  h1 {
    margin-bottom: 15px;
  }
`;

function Heading({ title, desc }) {
  return (
    <HeadingContent>
      <h1>{title}</h1>
      <p>{desc}</p>
    </HeadingContent>
  );
}

export default Heading;

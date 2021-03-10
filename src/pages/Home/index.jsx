import React from "react";
import styled from "styled-components";
import Header from "./auxiliars/Header";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

function HomePage() {
  return <Container>
      <Header />
  </Container>;
}

export default HomePage;

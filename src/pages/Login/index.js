import React from "react";
import styled from "styled-components";
import { Header } from "../../components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height:100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(.5);
`;

function LoginPage() {
  return (
    <Container>
      <Background src="/images/home-bg.jpg" alt="background" />
      <Header showButton={false} />
    </Container>
  );
}

export default LoginPage;

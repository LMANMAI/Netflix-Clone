import React from "react";
import styled from "styled-components";
import Header from "./auxiliars/Header";
import { FiInfo } from "react-icons/fi";
import { GrPlayFill } from "react-icons/gr";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Hero = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  height: 56.25vw;
  width: 100%;
`;
const BHero = styled.video`
  width: 100%;
  object-fit: cover;
  position: absolute;
  filter: brightness(0.6);
  z-index: -1;
`;
const FillContain = styled.div`
  padding-top: 20%;
  width: 95%;
  margin: 0 auto;

`;
const Logo = styled.img``;
const Bold = styled.p``;
const Desc = styled.p``;
const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
`;
const Button = styled.div`
  padding: 0.8rem;
  border-radius: 4px;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2.4rem;
  width: fit-content;
  margin: 1.5vw 0.75vw 0.1vw;
  svg {
    margin-right: 5px;
  }
`;
const PlayButton = styled(Button)`
  background-color: #fff;
  margin-left: 1.5vw;
`;
const InfoButton = styled(Button)`
  background-color: rgb(223 223 223 / 34%);
  color: white;
`;
function HomePage() {
  return (
    <Container>
      <Header />
      <Hero>
        <BHero loop autoPlay>
          <source src="/videos/HeroVideo.mp4" />
        </BHero>
        <FillContain>
          <Logo src="/images/LogoSerieHero.webp" />
          <Bold>Ve la temporada 1</Bold>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quos vero, ea nisi blanditiis asperiores dolore nobis quibusdam
            mollitia consequuntur optio illum odit voluptas fuga amet ex sed
            veniam praesentium?
          </Desc>
          <ButtonContainer>
            <PlayButton>
              <GrPlayFill />
              Reproducir
            </PlayButton>
            <InfoButton>
              <FiInfo />
              Más Información
            </InfoButton>
          </ButtonContainer>
        </FillContain>
      </Hero>
    </Container>
  );
}

export default HomePage;

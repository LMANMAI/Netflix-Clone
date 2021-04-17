import React from "react";
import styled from "styled-components";
import Header from "./auxiliars/Header";
import Row from "./auxiliars/Row";
import { FiInfo } from "react-icons/fi";
import { GrPlayFill } from "react-icons/gr";
import requests from "../../config/requests";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Hero = styled.div`
  /* position: absolute;
  z-index: -1;
  top: 0; */
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
  const {
    fetchNetflixOriginals,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
  } = requests;
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

      <Row tittle="NETFLIX ORIGINALS" url={fetchNetflixOriginals} />
      <Row tittle="Trending now" url={fetchTrending} />
      <Row tittle="Top Rated" url={fetchTopRated} />
      <Row tittle="Action Movies" url={fetchActionMovies} />
      <Row tittle="Comedy Movies" url={fetchComedyMovies} />
      <Row tittle="Horror Movies" url={fetchHorrorMovies} />
      <Row tittle="Romance Movies" url={fetchRomanceMovies} />
      <Row tittle="Documentaries" url={fetchDocumentaries} />
    </Container>
  );
}

export default HomePage;

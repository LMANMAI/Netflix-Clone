import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiInfo } from "react-icons/fi";
import { GrPlayFill } from "react-icons/gr";
import axios from "../../../config/axios";
import requests from "../../../config/requests";

const Hero = styled.div`
  /* position: absolute;
  z-index: -1;
  top: 0; */
  //max-height: 56.25vw;
  min-height: 75vh;
  width: 100vw;
`;

const FillContain = styled.div`
  padding-top: 20%;
  width: 95%;
  margin: 0 auto;
`;
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
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <Hero>
      <FillContain>
        <Bold>Ve la temporada 1</Bold>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos
          vero, ea nisi blanditiis asperiores dolore nobis quibusdam mollitia
          consequuntur optio illum odit voluptas fuga amet ex sed veniam
          praesentium?
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
  );
};

export default Banner;

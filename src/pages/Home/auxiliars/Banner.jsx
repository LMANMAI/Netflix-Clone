import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiInfo } from "react-icons/fi";
import { GrPlayFill } from "react-icons/gr";
import axios from "../../../config/axios";
import requests from "../../../config/requests";

const BannerHeader = styled.header`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.Image};
  height: 95vh;
  width: 100vw;
  position: relative;
  object-fit: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;
const Hero = styled.div`
  width: 98%;
  margin: 0 auto;

  height: fit-content;
  @media (min-width: 768px) {
    margin: initial;
    margin-left: 25px;
    //height: 190px;
  }
`;
const Tittle = styled.h1`
  font-size: 3rem;
  padding-bottom: 0.3rem;
`;
const Bold = styled.p``;
const Desc = styled.div`
  line-height: 1.3;
  padding-top: 1rem;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 0.8rem;
  width: 360px;
  height: 80px;
  @media (min-width: 768px) {
    width: 45rem;
  }
`;
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
  color: #141414;
`;
const InfoButton = styled(Button)`
  background-color: rgb(223 223 223 / 34%);
  color: white;
`;
const Fade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.61),
    #141414
  );
  position: relative;
  width: 100vw;
`;
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
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
    <BannerHeader
      Image={`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}
    >
      <Hero>
        <Tittle>{movie?.name || movie?.original_name || movie?.title}</Tittle>
        <Bold>Ve la temporada 1</Bold>
        <Desc>{movie?.overview}</Desc>

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
      </Hero>
      <Fade />
    </BannerHeader>
  );
};

export default Banner;

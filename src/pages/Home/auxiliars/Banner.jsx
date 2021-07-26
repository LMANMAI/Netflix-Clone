import React, { useState, useEffect } from "react";
import { FiInfo } from "react-icons/fi";
import { GrPlayFill } from "react-icons/gr";
import axios from "../../../config/axios";
import requests from "../../../config/requests";
import {
  BannerHeader,
  Hero,
  Tittle,
  Desc,
  ButtonContainer,
  PlayButton,
  InfoButton,
  Fade,
} from "./styles";

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

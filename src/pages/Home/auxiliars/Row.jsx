import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import {
  RowMain,
  RowTittle,
  RowContainer,
  RowWrapper,
  RowImage,
} from "./styles";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ tittle, url, largeRow, topten }) => {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const consulta = await axios.get(url);
      setMovies(consulta.data.results);
      return consulta;
    }
    fetchData();
  }, [url]);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerurl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const UrlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(UrlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    console.log(movie);
  };
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={7}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      className="mySwiper"
    >
      <RowTittle>{tittle}</RowTittle>
      <RowContainer largeRow={largeRow}>
        {React.Children.toArray(
          movies.map((movie) => (
            <SwiperSlide>
              <RowImage
                onClick={() => handleClick(movie)}
                src={`${baseUrl}${
                  largeRow
                    ? movie?.poster_path
                    : movie?.backdrop_path || movie?.poster_path
                }`}
                alt={movie.name}
              />
            </SwiperSlide>
            // <RowWrapper largeRow={largeRow}>
            //
            // </RowWrapper>
          ))
        )}
      </RowContainer>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </Swiper>
  );
};

export default Row;

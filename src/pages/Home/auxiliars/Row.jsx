import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { RowTittle, RowContainer, RowImage } from "./styles";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles/index.css";

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
  };
  return (
    <div>
      <RowTittle>{tittle}</RowTittle>
      <Swiper
        spaceBetween={5}
        //slidesPerView={8}
        navigation={true}
        className="mySwiper swiper_container"
      >
        <RowContainer largeRow={largeRow}>
          {React.Children.toArray(
            movies.map((movie) => (
              <SwiperSlide className="poster_container">
                <RowImage
                  onClick={() => handleClick(movie)}
                  src={`${baseUrl}${
                    largeRow ? movie?.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie.name}
                  loading="lazy"
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
    </div>
  );
};

export default Row;

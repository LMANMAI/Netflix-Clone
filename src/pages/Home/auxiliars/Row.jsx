import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import styled from "styled-components";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const RowMain = styled.div`
  //min-width: 100vw;
  width: fit-content;
  height: fit-content;
  margin: 50px auto;
  padding-left: 3rem;
`;
const RowTittle = styled.h3`
  color: #e5e5e5;
  margin: 5px;
  text-transform: capitalize;
  line-height: 1.25vw;
  font-size: 1.4vw;
`;
const RowContainer = styled.div`
  display: flex;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  padding: 5px;
  transition: 450ms;
  height: ${(props) => (props.largeRow ? "400px" : "30vh")};
  /* margin: 1rem 0; */
  border: ${(props) => props.topten && "1px solid red"};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RowWrapper = styled.div`
  width: ${(props) => (props.largeRow ? "170px" : "250px")};
  margin: 0 2px;

  @media (min-width: 768px) {
    width: ${(props) => (props.largeRow ? "15vw" : "250px")};
  }
`;
const RowImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  &:first-child {
    /* margin-left: 25px; */
  }
`;
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
    <RowMain>
      <RowTittle>{tittle}</RowTittle>
      <RowContainer largeRow={largeRow}>
        {React.Children.toArray(
          movies.map((movie) => (
            <RowWrapper largeRow={largeRow}>
              <RowImage
                onClick={() => handleClick(movie)}
                src={`${baseUrl}${
                  largeRow
                    ? movie?.poster_path
                    : movie?.backdrop_path || movie?.poster_path
                }`}
                alt={movie.name}
              />
            </RowWrapper>
          ))
        )}
      </RowContainer>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
    </RowMain>
  );
};

export default Row;

import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import styled from "styled-components";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
const RowMain = styled.div`
  //border: 1px solid red;
  width: 95%;
  margin: 0 auto;
`;
const RowTittle = styled.h3`
  color: white;
`;
const RowContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  transition: 450ms;
  height: ${(props) => (props.largeRow ? "39vh" : "24vh")};
  /* margin: 1rem 0; */
  border: ${(props) => props.topten && "1px solid red"};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RowImage = styled.img`
  object-fit: contain;
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
  const [trailerurl, setTrailerUrl] = useState('')
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
    autoplay: 1
  }
}
const handleClick = movie => {
  if(trailerurl){
    setTrailerUrl('');
  }else{
    movieTrailer(movie?.name || movie?.original_title ||'')
    .then((url) =>{
      const UrlParams =  new URLSearchParams(new URL(url).search);
      setTrailerUrl(UrlParams.get('v'))
    }).catch(error => console.log(error))
  }
  console.log(movie)
}
  return (
    <RowMain>
      <RowTittle>{tittle}</RowTittle>
      <RowContainer largeRow={largeRow}>
        {React.Children.toArray(
          movies.map((movie) => (
            <RowImage
              onClick={()=> handleClick(movie)}
              src={`${baseUrl}${
                largeRow
                  ? movie?.poster_path
                  : movie?.backdrop_path || movie?.poster_path
              }`}
              alt={movie.name}
            />
          ))
        )}
      </RowContainer>
      {trailerurl && <YouTube videoId={trailerurl} opts={opts}/>}
    </RowMain>
  );
};

export default Row;

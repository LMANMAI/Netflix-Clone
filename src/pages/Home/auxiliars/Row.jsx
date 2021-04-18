import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import styled from "styled-components";

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
  height: ${(props) => (props.largeRow ? "39vh" : "24vh")};
  /* margin: 1rem 0; */
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

const Row = ({ tittle, url, largeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const consulta = await axios.get(url);
      setMovies(consulta.data.results);
      return consulta;
    }
    fetchData();
  }, [url]);

  return (
    <RowMain>
      <RowTittle>{tittle}</RowTittle>
      <RowContainer largeRow={largeRow} id="row_container">
        {React.Children.toArray(
          movies.map((movie) => (
            <RowImage
              src={`${baseUrl}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))
        )}
      </RowContainer>
    </RowMain>
  );
};

export default Row;

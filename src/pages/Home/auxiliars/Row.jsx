import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import styled from "styled-components";

const RowTittle = styled.h3`
  color: white;
`;
const RowContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  height: 35vh;
  margin: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const RowImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin-right: 8px;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  &:first-child {
    margin-left: 25px;
  }
`;
const baseUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ tittle, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const consulta = await axios.get(url);
      setMovies(consulta.data.results);
      return consulta;
    }
    fetchData();
  }, [url]);
  console.log(movies);
  return (
    <div>
      <RowTittle>{tittle}</RowTittle>
      <RowContainer>
        {React.Children.toArray(
          movies.map((movie) => (
            <RowImage src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
          ))
        )}
      </RowContainer>
      {/* container -> posters */}
    </div>
  );
};

export default Row;

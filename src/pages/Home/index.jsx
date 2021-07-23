import React from "react";
import styled from "styled-components";
import Header from "./auxiliars/Header";
import Row from "./auxiliars/Row";
import Banner from "./auxiliars/Banner";
import Footer from "../../components/Footer";
import requests from "../../config/requests";
const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function HomePage() {
  //request para las imagenes
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
      <Banner />
      <Row
        tittle="NETFLIX ORIGINALS"
        url={fetchNetflixOriginals}
        largeRow={true}
      />
      <Row tittle="Top Rated" url={fetchTopRated} />
      <Row tittle="Comedy Movies " url={fetchComedyMovies} />
      <Row tittle="Action Movies" url={fetchActionMovies} />
      <Row
        tittle="Trending now"
        url={fetchTrending}
        largeRow={true}
        topten={true}
      />
      <Row tittle="Horror Movies" url={fetchHorrorMovies} />
      <Row tittle="Romance Movies" url={fetchRomanceMovies} />
      <Row tittle="Documentaries" url={fetchDocumentaries} />
      <Footer />
    </Container>
  );
}

export default HomePage;

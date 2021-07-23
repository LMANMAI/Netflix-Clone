import React from "react";
import styled from "styled-components";
import { GiEarthAmerica } from "react-icons/gi";

const Wrapper = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
`;
const Container = styled.div`
  max-width: 1000px;
  color: white;

  margin: 0 auto;
  padding: 30px;
`;
const Tittle = styled.p`
  color: #757575;
  max-width: 1000px;
  margin-bottom: 25px;
`;
const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const LinkItem = styled.a`
  color: #757575;
  max-width: 1000px;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;
const LanguageContainer = styled.div`
  color: #757575;
  display: flex;
  align-items: center;
  border: 1px solid #333;
  border-radius: 5px;
  width: fit-content;
  padding: 0.8rem 0.45rem;
`;
const LanguageSelect = styled.select`
  margin-left: 14px;
  background-color: #141414;
  outline: none;
  color: #757575;
  border: none;
`;
const DATA = [
  "Preguntas Frecuentes",
  "Centro de ayuda",
  "Terminos de Uso",
  "Privacidad",
  "Preferencia de Cookies",
  "informacion Corporativa",
];
function Footer() {
  return (
    <Wrapper>
      <Container>
        <Tittle>¿Preguntas? Llamá al 800-345-1375</Tittle>
        <LinkContainer>
          {React.Children.toArray(
            DATA.map((dato) => <LinkItem>{dato}</LinkItem>)
          )}
        </LinkContainer>
        <LanguageContainer>
          <GiEarthAmerica />
          <LanguageSelect name="select">
            <option value="español">Español</option>
            <option value="ingles">Ingles</option>
          </LanguageSelect>
        </LanguageContainer>
      </Container>
      <p>Made with{"</>"} by Lucas Maidana</p>
    </Wrapper>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  h1{
      font-size: 44px;
      color: red;
  }
`;

function SelectProfilePage(props) {
  return <Container>
      <h1>Seleccina tu Perfil</h1>
      <button onClick={()=> props.history.push('/browse')}>Ir al Perfil</button>
  </Container>;
}

export default SelectProfilePage;

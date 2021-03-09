import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer, Header } from "../../components";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  position: relative;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(0.9);
`;
const Formulario = styled.form`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 60px 68px 40px;
  margin: 0 auto;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  min-height: 660px;
  max-width: 450px;
  border-radius: 4px;
`;
const Tittle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 28px;
`;
const Input = styled.input`
  background-color: #333;
  padding: 16px 20px 5px;
  outline: none;
  border: none;
  color: white;
  border-radius: 4px;
  /* margin-bottom: 10px; */
  height: 50px;
  line-height: 50px;
  border-bottom: ${(props) =>
    props.error === true ? "2px solid #e87c03" : "none"};
  margin-top: ${(props) => (props.hasmargin === true ? "15px" : "8px")};
  &::last-child {
    margin-bottom: 0;
  }
  &::placeholder {
    color: #8c8c8c;
  }
`;
const ErrorMessage = styled.p`
  color: #e87c03;
  margin-bottom: 10px;
  font-size: 13px;
  padding: 6px 3px;
`;
const Button = styled.input`
  width: 100%;
  background-color: #e50914;
  padding: 16px;
  border-radius: 4px;
  margin: 24px 0 12px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  outline: none;
`;
const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Check = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
`;
const OptionCheck = styled.p`
  padding-left: 5px;
  color: #b3b3b3;
  font-weight: 300;
  font-size: 14px;
`;
const OptionLink = styled(OptionCheck)`
  cursor: pointer;
  &::hover {
    text-decoration: underline;
  }
`;
function LoginPage(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassw, setErrorPassw] = useState(false);
  const { email, password } = user;
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(email.trim() === ''){
      setErrorEmail(true);
    }   
    if(password.trim() === ''){
      setErrorPassw(true);
    }
    props.history.push("/Select-Profile");
  };
  useEffect(()=>{
    if(email !== '' && errorEmail === true){
      setErrorEmail(false);
    }
    if(password !== '' && errorPassw === true){
      setErrorPassw(false);
    }
  },[email, password]);

  return (
    <Container>
      <Background src="/images/home-bg.jpg" alt="background" />
      <Header showButton={false} />
      <Formulario onSubmit={handleSubmit}>
        <Tittle>Inicia Sesion</Tittle>
        <Input
          hasmargin={true}
          error={errorEmail}
          type="email"
          placeholder="Email o numero de telefono"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errorEmail && (
          <ErrorMessage>Ingresa un Email o un telefono valido</ErrorMessage>
        )}
        <Input
          hasmargin={true}
          error={errorPassw}
          type="password"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errorPassw && (
          <ErrorMessage>
            la contraseña debe tener entre 4 y 60 caracteres
          </ErrorMessage>
        )}
        <Button type="submit" value="Iniciar sesion" />
        <LoginOptions>
          <Check>
            <input type="checkbox" name="Recuerdame" />
            <OptionCheck>Recuerdame</OptionCheck>
          </Check>
          <OptionLink>¿Necesitas ayuda?</OptionLink>
        </LoginOptions>
      </Formulario>
      <Footer />
    </Container>
  );
}

export default LoginPage;

import React, { useEffect, useRef, useState } from "react";
import { Footer, Header } from "../../components";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
//Styled Components
import {
  Container,
  Background,
  Formulario,
  Tittle,
  Input,
  ErrorMessage,
  Button,
  LoginOptions,
  Check,
  OptionCheck,
  OptionLink,
  Bold,
} from "./auxiliars";
function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
  });
  /**State para los errores */
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassw, setErrorPassw] = useState(false);
  /**State para cambiar de formulario */
  const [openform, setOpenForm] = useState(false);
  /**destructuring del objeto de usuario */
  const { username, email, password } = user;
  const history = useHistory();
  const userAuth = useSelector(selectUser);
  const handleShowForm = () => {
    setOpenForm(!openform);
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setErrorEmail(true);
    }
    if (password.trim() === "") {
      setErrorPassw(true);
    }
  };
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };
  const SignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    if (email !== "" && errorEmail === true) {
      setErrorEmail(false);
    }
    if (password !== "" && errorPassw === true) {
      setErrorPassw(false);
    }
    if (userAuth) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [email, password]);

  return (
    <Container>
      <Background src="/images/home-bg.jpg" alt="background" />
      <Header showButton={false} />
      {openform ? (
        <Formulario onSubmit={handleSubmit}>
          <Tittle>Inicia Sesion</Tittle>
          <Input
            hasmargin={true}
            error={errorEmail}
            type="email"
            ref={emailRef}
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
            ref={passwordRef}
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
          <Button type="submit" value="Iniciar sesion" onClick={SignIn} />
          <LoginOptions>
            <Check>
              <input type="checkbox" name="Recuerdame" />
              <OptionCheck>Recuerdame</OptionCheck>
            </Check>
            <OptionLink>¿Necesitas ayuda?</OptionLink>
          </LoginOptions>
          <OptionLink>
            ¿Nuevo en Netflix?{" "}
            <Bold onClick={() => handleShowForm()}>Registrate ahora</Bold>
          </OptionLink>
        </Formulario>
      ) : (
        <Formulario onSubmit={handleSubmit}>
          <Tittle>Registrate</Tittle>
          <Input
            hasmargin={true}
            type="text"
            ref={nameRef}
            placeholder="Nombre"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <Input
            hasmargin={true}
            error={errorEmail}
            type="email"
            ref={emailRef}
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
            ref={passwordRef}
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
          <Button type="submit" value="Registrarme" onClick={Register} />
          <LoginOptions>
            <Check>
              <input type="checkbox" name="Recuerdame" />
              <OptionCheck>Recuerdame</OptionCheck>
            </Check>
            <OptionLink>¿Necesitas ayuda?</OptionLink>
          </LoginOptions>
          <OptionLink>
            Ya tienes cuenta en Netflix?
            <Bold onClick={() => handleShowForm()}>Inicia Sesion </Bold>
          </OptionLink>
        </Formulario>
      )}
      <Footer />
    </Container>
  );
}

export default LoginPage;

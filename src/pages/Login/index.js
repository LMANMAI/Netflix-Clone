import React, { useContext, useEffect, useRef, useState } from "react";
import { Footer, Header } from "../../components";
import { auth } from "../../firebase";
import { AuthContext } from "../../provider/AuthProvider";
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
function LoginPage(props) {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassw, setErrorPassw] = useState(false);
  const { email, password } = user;
  const history = useHistory();
  const userAuth = useSelector(selectUser);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(user);
    if (email.trim() === "") {
      setErrorEmail(true);
    }
    if (password.trim() === "") {
      setErrorPassw(true);
    }
    if (email !== "" && password !== "") {
      authContext.login({
        email,
        password,
        callback: () => props.history.push("/"),
      });
    }
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  const SignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // history.push("/Home");
      })
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
  }, [email, password]);

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
          ¿Nuevo en Netflix? <Bold onClick={Register}>Registrate ahora</Bold>
        </OptionLink>
      </Formulario>
      <Footer />
    </Container>
  );
}

export default LoginPage;

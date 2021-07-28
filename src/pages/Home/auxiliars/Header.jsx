import React, { useState } from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { auth } from "../../../firebase";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import {
  HeaderContainer,
  ArrowWrapper,
  Logo,
  Menu,
  Link,
  AvatarContainer,
  RightWrapper,
  MenuToggle,
} from "./styles";
const DATA = [
  "Inicio",
  "Series",
  "Peliculas",
  "Novedades",
  "Populares",
  "Mi Lista",
];

function Header() {
  const userAuth = useSelector(selectUser);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <HeaderContainer>
      <ArrowWrapper>
        <Logo alt="background image" src="/images/Netflix_Logo.png" />
        <Menu>
          {React.Children.toArray(
            DATA.map((link, index) => (
              <Link selected={index === 0}>{link}</Link>
            ))
          )}
        </Menu>
      </ArrowWrapper>

      <RightWrapper>
        <BsSearch />
        <p>{userAuth.name}</p>
        <BsFillBellFill />
        <AvatarContainer>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="imagen de usuario"
          />
          <GoTriangleDown onMouseEnter={() => handleToggle()} />
          {toggle && (
            <MenuToggle onMouseLeave={() => handleToggle(false)}>
              <li>Administrar Perfiles</li>
              <hr />
              <li>Cuenta</li>
              <li onClick={() => auth.signOut()}>Cerrar Sesion</li>
            </MenuToggle>
          )}
        </AvatarContainer>
      </RightWrapper>
    </HeaderContainer>
  );
}

export default Header;

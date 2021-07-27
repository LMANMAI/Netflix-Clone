import React, { useContext, useState } from "react";
import { BsSearch, BsFillBellFill, BsFillGiftFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { auth } from "../../../firebase";
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
        {/* <p>{user.username}</p> */}
        <BsFillBellFill />
        <AvatarContainer>
          {/* <img src={user.avatarUrl} alt={user.username} /> */}
          <GoTriangleDown onMouseEnter={() => handleToggle()} />
          {toggle && (
            <MenuToggle onMouseLeave={() => handleToggle(false)}>
              <p>Administrar Perfiles</p>
              <hr />
              <p>Cuenta</p>
              <p onClick={() => auth.signOut()}>Cerrar Sesion</p>
            </MenuToggle>
          )}
        </AvatarContainer>
      </RightWrapper>
    </HeaderContainer>
  );
}

export default Header;

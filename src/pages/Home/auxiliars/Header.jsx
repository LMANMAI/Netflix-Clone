import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
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
  const authContext = useContext(AuthContext);
  const { user } = authContext;
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
        <BsFillGiftFill />
        <BsFillBellFill />
        <AvatarContainer>
          {/* <img src={user.avatarUrl} alt={user.username} /> */}
          <button onClick={() => auth.signOut()}>
            <GoTriangleDown />
          </button>
        </AvatarContainer>
      </RightWrapper>
    </HeaderContainer>
  );
}

export default Header;

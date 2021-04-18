import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../provider/AuthProvider";
import { BsSearch, BsFillBellFill, BsFillGiftFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  padding: 16px 55px;
  background-color: #111;
`;
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
const Logo = styled.img`
  width: 120px;
  height: 40px;
  margin-right: 20px;
  object-fit: cover;
`;
const Menu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Link = styled.p`
  font-weight: ${(props) => (props.selected === true ? "700" : "300")};
  transition: color 300ms;
  cursor: pointer;
  font-size: 15px;
  padding: 0 10px;
  &:hover {
    color: gray;
  }
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 8px;
  }
`;
const RightWrapper = styled(ArrowWrapper)`
  width: 40%;
  justify-content: space-between;
  svg,
  p {
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    width: 13%;
  }
`;
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
          <GoTriangleDown />
        </AvatarContainer>
      </RightWrapper>
    </HeaderContainer>
  );
}

export default Header;

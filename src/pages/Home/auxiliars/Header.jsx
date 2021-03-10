import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  padding: 16px 55px;
`;

const ArrowWrapper = styled.div`
  display: flex;
`;
const Logo = styled.div`
  width: 150px;
  height: 45px;
  object-fit: cover;
`;
const Link = styled.p`
    font-weight: ${(props) => (props.selected === true ?"700" : "300")};
    color: white;
    transition: color 300ms;
    cursor: pointer;
    &:hover{
        color: gray;
    }
`;
const DATA = [
    "Inicio",
    "Series",
    "Peliculas",
    "Novedades Populares",
    "Mi Lista",
  ];
function Header() {
  return (
    <HeaderContainer>
      <Logo alt="background image" src="/images/Netflix_Logo.png" />
      <ArrowWrapper>
        {React.Children.toArray(DATA.map((link, index) => <Link selected={ index === 0 }>{link}</Link>))}
      </ArrowWrapper>
    </HeaderContainer>
  );
}

export default Header;

import styled from "styled-components";

/**BANNER */
export const BannerHeader = styled.header`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.Image};
  height: 95vh;
  width: 100vw;
  position: relative;
  object-fit: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;
export const Hero = styled.div`
  width: 100%;
  //margin: 0 auto;
  position: absolute;
  bottom: 120px;
  height: fit-content;
  @media (min-width: 768px) {
    margin: initial;
    margin-left: 25px;
    //height: 190px;
  }
`;
export const Tittle = styled.h1`
  font-size: 3rem;
  padding-bottom: 0.3rem;
`;
export const Bold = styled.p``;
export const Desc = styled.div`
  line-height: 1.3;
  padding-top: 1rem;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 0.8rem;
  width: 360px;
  height: 80px;
  @media (min-width: 768px) {
    width: 45rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 35px;
`;
export const Button = styled.div`
  padding: 0.8rem;
  border-radius: 4px;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2.4rem;
  width: fit-content;
  margin: 1.5vw 0.75vw 0.1vw;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;
export const PlayButton = styled(Button)`
  background-color: #fff;
  margin-left: 1.5vw;
  color: #141414;
`;
export const InfoButton = styled(Button)`
  background-color: rgb(223 223 223 / 34%);
  color: white;
`;
export const Fade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.61),
    #141414
  );
  position: relative;
  width: 100vw;
`;

/**HEADER */
export const HeaderContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  padding: 16px 55px;
  background-color: transparent;
  position: absolute;
  z-index: 3;
  margin-bottom: 3rem;
`;
export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
export const Logo = styled.img`
  width: 120px;
  height: 40px;
  margin-right: 20px;
  object-fit: cover;
`;
export const Menu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const Link = styled.p`
  font-weight: ${(props) => (props.selected === true ? "700" : "300")};
  transition: color 300ms;
  cursor: pointer;
  font-size: 15px;
  padding: 0 10px;
  &:hover {
    color: gray;
  }
`;
export const AvatarContainer = styled.div`
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
export const RightWrapper = styled(ArrowWrapper)`
  width: 40%;
  gap: 10px;
  justify-content: flex-end;
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
/**ROWS */

export const RowMain = styled.div`
  //min-width: 100vw;
  width: fit-content;
  height: fit-content;
  margin: 50px auto;
  padding-left: 3rem;
`;
export const RowTittle = styled.h3`
  color: #e5e5e5;
  margin: 5px;
  text-transform: capitalize;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    line-height: 1.25vw;
    font-size: 1.4vw;
  }
`;
export const RowContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 5px;
  transition: 450ms;
  height: ${(props) => (props.largeRow ? "400px" : "30vh")};
  width: 90vw;
  /* margin: 1rem 0; */
  border: ${(props) => props.topten && "1px solid red"};
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const RowWrapper = styled.div`
  width: ${(props) => (props.largeRow ? "170px" : "250px")};

  @media (min-width: 768px) {
    width: ${(props) => (props.largeRow ? "15vw" : "250px")};
  }
`;
export const RowImage = styled.img`
  object-fit: cover;
  width: 100%;
  margin-right: 10px;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  &:first-child {
    /* margin-left: 25px; */
  }
`;

export const MenuToggle = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 55px;
  right: 45px;
  padding: 15px;
  li {
    list-style: none;
    padding: 5px;
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.9);
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(0.9);
`;
export const Formulario = styled.form`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 60px 68px 40px;
  margin: 0 auto;
  margin-bottom: 90px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  //min-height: 660px;
  height: fit-content;
  max-width: 450px;
  border-radius: 4px;
`;
export const Tittle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 28px;
`;
export const Input = styled.input`
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
export const ErrorMessage = styled.p`
  color: #e87c03;
  margin-bottom: 10px;
  font-size: 13px;
  padding: 6px 3px;
`;
export const Button = styled.input`
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
export const LoginOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Check = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
`;
export const OptionCheck = styled.p`
  padding-left: 5px;
  color: #b3b3b3;
  font-weight: 300;
  font-size: 14px;
`;
export const OptionLink = styled(OptionCheck)`
  cursor: pointer;
  &::hover {
    text-decoration: underline;
  }
`;
export const Bold = styled.p`
  font-weight: bold;
`;

import styled from "styled-components";

const Nav = styled.div`
  left: -5px;
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-around;
`;
const Img = styled.img`
  height: 40px;
`;
const H1 = styled.h1`
  height: 40px;
  font-family: "kanit", sans-serif;
  margin-top: 0px;
  font-weight: 700;
  font-size: 30px;
  background: #4fa8fb;
  background: -webkit-linear-gradient(to right, #4fa8fb, #ff35c2);
  background: linear-gradient(to right, #4fa8fb, #ff35c2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @media only screen and (max-width: 280px) {
    font-size: 20px;
  }
`;

export { Nav, Img, H1 };

import codigo from "../icons/codigo.png";
import styled from "styled-components";

// import BtnTema from "./BtnTema";

const Nav = styled.div`
  left: -5px;
  width: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: space-around;
`;
const Img = styled.img`
  margin-top: 5px;
  height: 40px;
  animation-name: transicion;
  animation-duration: 1s;

  @keyframes transicion {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
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
  animation-name: transicion;
  animation-duration: 1s;

  @keyframes transicion {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 280px) {
    font-size: 20px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Img src={codigo} alt="codigo" />

      <H1>Full Stack Developer</H1>
      <div>
        {/* s */}
        <Img src={codigo} alt="codigo" />
      </div>
    </Nav>
  );
};

export default Navbar;

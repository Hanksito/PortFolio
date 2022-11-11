import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import cv from "../cv/Martín_Barja Balseiro_Resume_31-10-2022-16-58-33.pdf";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 25px;
`;
const ContainerRedes = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-width: 150px;
  min-height: 60px;
`;
const Btn = styled.button`
  align-items: center;
  background: #4fa8fb;
  background-image: linear-gradient(144deg, #bf80e5, #fc80c2 50%);
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #080808;
  display: flex;
  font-family: "kanit", sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 100px;
  padding: 10px;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: scale(1.2);
    background: linear-gradient(to right, #4fa8fb, #ff35c2);
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }
`;
const Img = styled.img`
  height: 40px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    transform: scale(1.5);
  }
`;
const Anchor = styled.a`
  text-decoration: none;
`;

const RedesCv = () => {
  return (
    <Container>
      <ContainerRedes>
        <a
          href="https://github.com/Hanksito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/developermartinbarja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={linkedin} />
        </a>
      </ContainerRedes>
      <ContainerRedes>
        <Anchor href={cv} download>
          <Btn>Descargar CV</Btn>
        </Anchor>
      </ContainerRedes>
    </Container>
  );
};

export default RedesCv;

import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";
import cv from "../cv/Martín_Barja Balseiro_Resume_31-10-2022-16-58-33.pdf";
import {
  Anchor,
  Btn,
  ContainerRedes,
  Container,
  Img,
} from "../styles/stylesRedesCv";

const RedesCv = () => {
  return (
    <Container>
      <ContainerRedes>
        <a
          href="https://github.com/Hanksito"
          target="_blank"
          rel="Github profile"
        >
          <Img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/developermartinbarja/"
          target="_blank"
          rel="Linkedin profile"
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

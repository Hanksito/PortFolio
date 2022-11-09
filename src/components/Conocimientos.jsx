import {
  H1,
  H,
  ContainerIcon,
  Icon,
  ContainerCo,
  Container,
} from "../styles/stylesHabilidades";
import bootstrap from "../icons/bootstrap-5.svg";
import js from "../icons/javascript.svg";
import react from "../icons/react-2.svg";
import css from "../icons/css-3.svg";
import flask from "../icons/flask.png";
import git from "../icons/git.svg";
import html from "../icons/html-1.svg";
import jest from "../icons/jest.jpg";
import python from "../icons/python.svg";
import redux from "../icons/redux.svg";
import typescript from "../icons/typescript-2.svg";
import sql from "../icons/sqlA.png";
import tailwind from "../icons/tailwind.svg";

const Conocimientos = ({ HabilidadeSection }) => {
  return (
    <Container ref={HabilidadeSection}>
      <H1>Habilidades</H1>
      <ContainerCo>
        <ContainerIcon>
          <H>JavaScript</H>
          <Icon src={js} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Bootstrap</H>
          <Icon src={bootstrap} />
        </ContainerIcon>
        <ContainerIcon>
          <H>React Js</H>
          <Icon src={react} />
        </ContainerIcon>
        <ContainerIcon>
          <H>CSS</H>
          <Icon src={css} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Flask</H>
          <Icon src={flask} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Git</H>
          <Icon src={git} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Html 5</H>
          <Icon src={html} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Jest</H>
          <Icon src={jest} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Python</H>
          <Icon src={python} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Redux</H>
          <Icon src={redux} />
        </ContainerIcon>
        <ContainerIcon>
          <H>TypeScript</H>
          <Icon src={typescript} />
        </ContainerIcon>
        <ContainerIcon>
          <H>SQLAlquemy</H>
          <Icon src={sql} />
        </ContainerIcon>
        <ContainerIcon>
          <H>Tailwind</H>
          <Icon src={tailwind} />
        </ContainerIcon>
      </ContainerCo>
    </Container>
  );
};

export default Conocimientos;

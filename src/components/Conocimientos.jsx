import {
  H1,
  H,
  ContainerIcon,
  Icon,
  ContainerCo,
  Container,
} from "../styles/stylesHabilidades";
import bootstrap from "../icons/bootstrap.png";
import js from "../icons/js.png";
import react from "../icons/react.png";
import css from "../icons/css-3.png";
import flask from "../icons/flask.png";
import git from "../icons/git.png";
import html from "../icons/html-5.png";
import jest from "../icons/jest.jpg";
import python from "../icons/python.png";
import redux from "../icons/redux.png";
import typescript from "../icons/typescript.png";
import sql from "../icons/sqlA.png";

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
      </ContainerCo>
    </Container>
  );
};

export default Conocimientos;

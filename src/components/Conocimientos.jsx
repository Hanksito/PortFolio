import { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
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

const Container = styled.div`
  padding: 15px 5px 0 5px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-family: "kanit", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  background: #ff35c2;
  background: -webkit-linear-gradient(to right, #ff35c2, #4fa8fb);
  background: linear-gradient(to right, #ff35c2, #4fa8fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const ContainerCo = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const Icon = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    transform: scale(1.2);
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px 15px 5px 15px;
  border-radius: 8px;
  opacity: 1;
`;
const H = styled.h1`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: white;
  padding-top: 5px;
  margin-bottom: 5px;
`;

const Conocimientos = ({ HabilidadeSection }) => {
  const timeline = gsap.timeline();

  useEffect(() => {
    const skills = document.querySelectorAll(".skill");
    timeline.to(skills, {
      x: -5,
      duration: 1.5,
      stagger: 0.3,
      opacity: 1,
    });
  }, []);

  return (
    <Container ref={HabilidadeSection}>
      <H1>Habilidades</H1>
      <ContainerCo>
        <ContainerIcon className="skill">
          <H>JavaScript</H>
          <Icon src={js} alt="JavaScript" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Bootstrap</H>
          <Icon src={bootstrap} alt="Bootstrap" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>React Js</H>
          <Icon src={react} alt="React Js" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>CSS</H>
          <Icon src={css} alt="CSS" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Flask</H>
          <Icon src={flask} alt="Flask" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Git</H>
          <Icon src={git} alt="Control de versiones Git" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Html 5</H>
          <Icon src={html} alt="html5" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Jest</H>
          <Icon src={jest} alt="testing with jest" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Python</H>
          <Icon src={python} alt="Python" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Redux</H>
          <Icon src={redux} alt="Redux" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>TypeScript</H>
          <Icon src={typescript} alt="TypeScript" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>SQLAlquemy</H>
          <Icon src={sql} alt="SQLAlquemy" />
        </ContainerIcon>
        <ContainerIcon className="skill">
          <H>Tailwind</H>
          <Icon src={tailwind} alt="Tailwind" />
        </ContainerIcon>
      </ContainerCo>
    </Container>
  );
};

export default Conocimientos;

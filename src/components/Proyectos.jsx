import styled from "styled-components";
import SporterTeam from "../proyectosImg/SporterTeam.png";
import Cotizador from "../proyectosImg/Cotizador Criptomonedas.png";
import Planificador from "../proyectosImg/Planificador de Gastos.png";
import BlogStarWars from "../proyectosImg/Blog Star Wars.png";
import css from "../icons/css-3.svg";
import react from "../icons/react-2.svg";
import boostrap from "../icons/bootstrap-5.svg";
import python from "../icons/python.svg";
import flask from "../icons/flask.png";
import sql from "../icons/sqlA.png";
import js from "../icons/javascript.svg";

const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2px;
  max-height: 50px;
`;
const Icon = styled.img`
  width: 10%;
  max-height: 60px;
  margin: 4px;
`;
const ContainerP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
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
const Card = styled.div`
  border: 1px solid #ebe8e8;
  display: flex;
  flex-direction: column;
  background-color: #3a3939;
  align-items: center;
  border-radius: 8px;
  margin: 7px;
  max-width: 340px;
  margin-top: 35px;
  height: 450px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Img = styled.img`
  min-width: 220px;
  width: 95%;
  padding: 4px;
`;
const H = styled.h1`
  font-family: "kanit", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: white;
  text-align: center;
`;
const P = styled.p`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: white;
  text-align: center;
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 2px;
  margin-top: 1px;
`;
const Btn = styled.button`
  align-items: center;
  background: #10508a;
  background-image: linear-gradient(144deg, #bf80e5, #fc80c2 30%);
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #0a0a0a;
  display: flex;
  font-family: "kanit", sans-serif;
  font-weight: 300;
  justify-content: center;
  line-height: 1em;
  touch-action: manipulation;
  white-space: nowrap;
  width: 100px;
  padding: 10px;
  margin-bottom: 4px;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    transform: scale(1.2);
    background: linear-gradient(to right, #4fa8fb, #ff35c2);
  }
`;
const Anchor = styled.a`
  text-decoration: none;
  margin-top: 2px;
  margin-bottom: 2px;
`;
const Proyectos = ({ ProyectoSection }) => {
  return (
    <Container ref={ProyectoSection}>
      <H1>Proyectos</H1>
      <ContainerP>
        <Card>
          <H>SporterTeam</H>
          <Img src={SporterTeam} />
          <Details>
            <P>Una aplicación web para crear y encontrar eventos deportivos</P>
            <P>Tecnologías</P>
            <DivIcons>
              <Icon src={js} />
              <Icon src={react} />
              <Icon src={boostrap} />
              <Icon src={css} />
              <Icon src={python} />
              <Icon src={flask} style={{ height: "40px" }} />
              <Icon src={sql} />
            </DivIcons>
            <Anchor
              href="https://github.com/Hanksito/SporterTeam"
              target="_blank"
              rel="Github profile"
            >
              <Btn>Github</Btn>
            </Anchor>
          </Details>
        </Card>
        <Card>
          <H>Blog de Star Wars</H>
          <Img src={BlogStarWars} />
          <Details>
            <P>
              Una aplicación web de informacion de los personajes de Star Wars
            </P>
            <P>Tecnologías</P>
            <DivIcons>
              <Icon src={js} />
              <Icon src={react} />
              <Icon src={boostrap} />
              <Icon src={css} />
            </DivIcons>
            <Anchor
              href="https://github.com/Hanksito/Blog-de-Starwars"
              target="_blank"
              rel="Github profile"
            >
              <Btn>Github</Btn>
            </Anchor>
          </Details>
        </Card>
        <Card>
          <H> Cryptomonedas</H>
          <Img src={Cotizador} />
          <Details>
            <P>
              Una aplicación de informacion de los precios de las cryptomonedas
            </P>
            <P>Tecnologías</P>
            <DivIcons>
              <Icon src={js} />
              <Icon src={react} />
              <Icon src={boostrap} />
              <Icon src={css} />
            </DivIcons>
            <Anchor
              href="https://github.com/Hanksito/Cotizador-Criptomonedas"
              target="_blank"
              rel="Github profile"
            >
              <Btn>Github</Btn>
            </Anchor>
          </Details>
        </Card>
        <Card>
          <H>Planificador de Gastos</H>
          <Img src={Planificador} />
          <Details>
            <P>Una aplicación web para controlar los gastos mensuales</P>
            <P>Tecnologías</P>
            <DivIcons>
              <Icon src={js} />
              <Icon src={react} />
              <Icon src={boostrap} />
              <Icon src={css} />
            </DivIcons>
            <Anchor
              href="https://github.com/Hanksito/Control-de-presupuesto"
              target="_blank"
              rel="Github profile"
            >
              <Btn>Github</Btn>
            </Anchor>
          </Details>
        </Card>
      </ContainerP>
    </Container>
  );
};

export default Proyectos;

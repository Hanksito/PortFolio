import {
  Anchor,
  Btn,
  P,
  H,
  Img,
  Details,
  Card,
  H1,
  Container,
  ContainerP,
  Icon,
  DivIcons,
} from "../styles/stylesProyectos";
import SporterTeam from "../proyectosImg/SporterTeam.png";
import Cotizador from "../proyectosImg/Cotizador Criptomonedas.png";
import Planificador from "../proyectosImg/Planificador de Gastos.png";
import BlogStarWars from "../proyectosImg/Blog Star Wars.png";
import css from "../icons/css-3.png";
import react from "../icons/react.png";
import boostrap from "../icons/bootstrap.png";
import python from "../icons/python.png";
import flask from "../icons/flask.png";
import sql from "../icons/sqlA.png";
import js from "../icons/js.png";

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
              <Icon src={flask} />
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

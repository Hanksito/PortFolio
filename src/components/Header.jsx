import yo from "../img/yo.jpg";
import {
  Span,
  P,
  Div,
  Row,
  Yo,
  Cabecera,
  ContainerHeader,
} from "../styles/stylesHeader";

const Header = () => {
  return (
    <ContainerHeader>
      <Cabecera>De las dificultades nacen los milagros.</Cabecera>
      <Row>
        <Div>
          <Yo src={yo} alt="yo" />
        </Div>
        <Div>
          <P>
            <Span>Hola, soy Martín Barja Balseiro.</Span> Comencé como la
            programación 2022 por recomendación y siempre pensé que esto no era
            para mí, pero me encanta. Actualmente,
            <Span> me encuentro en la bùsqueda de empleo.</Span>
          </P>
          <P>
            Soy originario de <Span>España</Span> y de momento vivo en
            <Span> Naron, Galicia</Span> con mi increíble esposa y mi precioso
            perro.
          </P>
          <P>
            Me encanta <Span>JavaScript, React</Span> y casi todo lo que tenga
            que ver con el frontend. Cuando no estoy programando, me gusta ver
            películas, series y jugar a videojuegos como el
            <Span> World of Warcraft.</Span>
          </P>
        </Div>
      </Row>
    </ContainerHeader>
  );
};

export default Header;

import yo from "../img/yo.jpg";
import styled from "styled-components";

const ContainerHeader = styled.div`
  padding-top: 25px; ;
`;

const Cabecera = styled.h1`
  font-family: "kanit", sans-serif;
  font-weight: 700;
  background: #fc80c1;
  background: -webkit-linear-gradient(to right, #fc80c1, #bf80e5);
  background: linear-gradient(to right, #fc80c1, #bf80e5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const Yo = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 300px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.2s;
  :hover {
    filter: drop-shadow(0 0 20px #5f5e5e);
  }
  animation: aparicion;
  animation-duration: 1s;
  @keyframes aparicion {
    from {
      transform: scale(0.2);
      border-radius: 100%;
    }

    to {
      transform: scale(1);
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 760px) {
    flex-direction: row;
  }
  @media (max-width: 759px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  margin-top: 0px;
  width: auto;
  @media (min-width: 760px) {
    width: 48%;
  }
`;
const P = styled.p`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  color: grey;
`;
const Span = styled.span`
  color: #f2f2f2;
  font-weight: 500;
`;
const SpanAnimationOne = styled.span`
  animation-name: traslation;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @keyframes traslation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const SpanAnimationTwo = styled.span`
  animation-name: traslation;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 1s;

  @keyframes traslation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const SpanAnimationThree = styled.span`
  animation-name: traslation;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 1.5s;
  animation-fill-mode: backwards;

  @keyframes traslation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Header = () => {
  return (
    <ContainerHeader>
      <Cabecera>
        <>De</> las dificultades nacen los milagros.
      </Cabecera>
      <Row>
        <Div>
          <Yo src={yo} alt="yo" />
        </Div>
        <Div>
          <P>
            <SpanAnimationOne>
              <Span>Hola, soy Martín Barja Balseiro.</Span> Comencé como la
              programación 2022 por recomendación y siempre pensé que esto no
              era para mí, pero me encanta. Actualmente,
              <Span> me encuentro en la bùsqueda de empleo.</Span>
            </SpanAnimationOne>
          </P>
          <P>
            <SpanAnimationTwo>
              Soy originario de <Span>España</Span> y de momento vivo en
              <Span> Naron, Galicia</Span> con mi increíble esposa y mi precioso
              perro.
            </SpanAnimationTwo>
          </P>
          <P>
            <SpanAnimationThree>
              Me encanta <Span>JavaScript, React</Span> y casi todo lo que tenga
              que ver con el frontend. Cuando no estoy programando, me gusta ver
              películas, series y jugar a videojuegos como el
              <Span> World of Warcraft.</Span>
            </SpanAnimationThree>
          </P>
        </Div>
      </Row>
    </ContainerHeader>
  );
};

export default Header;

import { useRef } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NavbarAnchor from "./components/NavbarAnchor";
import RedesCv from "./components/RedesCv";
import Conocimientos from "./components/Conocimientos";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

const Container = styled.div`
  max-width: 760px;
  padding: 0px 20px;
  margin: 0 auto;
`;
const Div = styled.div`
  background-color: #141517;
  top: 0;
`;
function App() {
  const HabilidadeSection = useRef(null);
  const ProyectoSection = useRef(null);
  const ContactoSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Div>
      <Navbar />

      <Container>
        <NavbarAnchor
          scrollDown={scrollDown}
          ProyectoSection={ProyectoSection}
          HabilidadeSection={HabilidadeSection}
          ContactoSection={ContactoSection}
        />
        <Header />
        <RedesCv />
        <Conocimientos HabilidadeSection={HabilidadeSection} />
        <Proyectos ProyectoSection={ProyectoSection} />
        <Contacto ContactoSection={ContactoSection} />
      </Container>
    </Div>
  );
}

export default App;

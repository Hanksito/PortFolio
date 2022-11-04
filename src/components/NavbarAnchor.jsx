import { Anchor, NavAnchor } from "../styles/stylesNavbarAnchor";

const NavbarAnchor = ({
  scrollDown,
  ContactoSection,
  HabilidadeSection,
  ProyectoSection,
}) => {
  return (
    <NavAnchor>
      <Anchor
        onClick={() => {
          scrollDown(HabilidadeSection);
        }}
      >
        Habilidades
      </Anchor>
      <Anchor
        onClick={() => {
          scrollDown(ProyectoSection);
        }}
      >
        Proyectos
      </Anchor>
      <Anchor
        onClick={() => {
          scrollDown(ContactoSection);
        }}
      >
        Contacto
      </Anchor>
    </NavAnchor>
  );
};

export default NavbarAnchor;

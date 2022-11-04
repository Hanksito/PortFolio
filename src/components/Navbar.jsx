import codigo from "../icons/codigo.png";
import { Nav, Img, H1 } from "../styles/stylesNavbar";

const Navbar = () => {
  return (
    <Nav>
      <Img src={codigo} alt="codigo" />

      <H1>Full Stack Developer</H1>

      <Img src={codigo} alt="codigo" />
    </Nav>
  );
};

export default Navbar;

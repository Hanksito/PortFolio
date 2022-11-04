import {
  Btn,
  Textarea,
  Container,
  Input,
  Form,
  H1,
} from "../styles/stylesContacto";
const Contacto = ({ ContactoSection }) => {
  return (
    <div ref={ContactoSection}>
      <H1>Contacto</H1>
      <Container>
        <Form
          action="https://formsubmit.co/barjabalseiro@gmail.com"
          method="POST"
        >
          <Input type="text" name="name" placeholder="Su nombre" required />
          <Input type="text" name="email" required placeholder="Su correo" />
          <Textarea placeholder="Tu mensaje" name="message" required />
          <Btn type="submit">Send</Btn>
        </Form>
      </Container>
    </div>
  );
};

export default Contacto;

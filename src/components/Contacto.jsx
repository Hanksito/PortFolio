import styled from "styled-components";

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 90%;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
const Input = styled.input`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  font-size: 16px;
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Textarea = styled.textarea`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin-top: 23px;
`;
const Btn = styled.button`
  align-items: center;
  background: #4fa8fb;
  background-image: linear-gradient(144deg, #bf80e5, #fc80c2 50%);
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  color: #080808;
  display: flex;
  font-family: "kanit", sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 100px;
  padding: 10px;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 25px;
  transition: all 0.5s;
  :hover {
    background: linear-gradient(to right, #4fa8fb, #ff35c2);
    transform: scale(1.2);
  }
`;
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

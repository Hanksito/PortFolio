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
export { Span, P, Div, Row, Yo, Cabecera, ContainerHeader };

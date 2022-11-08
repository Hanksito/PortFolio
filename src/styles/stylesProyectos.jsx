import styled from "styled-components";

const DivIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2px;
`;
const Icon = styled.img`
  width: 10%;
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
  :hover {
    background-image: linear-gradient(144deg, #a837ee, #f3198d 50%);
  }
`;
const Anchor = styled.a`
  text-decoration: none;
  margin-top: 2px;
  margin-bottom: 2px;
`;
export {
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
};

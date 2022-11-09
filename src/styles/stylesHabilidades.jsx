import styled from "styled-components";

const Container = styled.div`
  padding: 15px 5px 0 5px;
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
const ContainerCo = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const Icon = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    transform: scale(1.2);
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px 15px 5px 15px;
  border-radius: 8px;
`;
const H = styled.h1`
  font-family: "kanit", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: white;
  padding-top: 5px;
  margin-bottom: 5px;
`;

export { H1, H, ContainerIcon, Icon, ContainerCo, Container };

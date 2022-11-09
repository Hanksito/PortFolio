import styled from "styled-components";

const NavAnchor = styled.div`
  color: white;
  display: flex;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Anchor = styled.a`
  cursor: pointer;
  font-family: "kanit", sans-serif;
  font-size: 16px;
  font-weight: 300;
  border-radius: 8px;
  padding: 5px 10px;
  transition: all 0.5s;
  :hover {
    background-color: #8f9ba8;
    transition: background 0.2s 0s ease-in-out;
    transform: rotate(-5deg);
  }
`;

export { NavAnchor, Anchor };

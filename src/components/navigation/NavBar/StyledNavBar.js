import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background: white;
  height: 5rem;
  overflow: hidden;
  width: 100%;

  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 60px;
    border-radius: 40px;
    margin: 0 10px 0 0;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 10px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #438548;
  padding: 15px 0;
  text-decoration: none;
  color: #000;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;

  &:hover {
    text-decoration: none;
    color: #000;
    background-size: 100% 0.1em;

    cursor: pointer;
  }
`;
export const StyledUl = styled.ul``;

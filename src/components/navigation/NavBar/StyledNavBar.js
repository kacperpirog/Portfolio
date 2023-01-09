import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  background: white;
  height: 5rem;
  overflow: hidden;
  width: 100%;
  margin-top: -4.5em;
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
    list-style: none;
    display: flex;
    width: 0;
    li {
      margin: 0 10px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  color: #000;
  background-color: #438548;
  padding: 15px 0;
  text-decoration: none;
  color: #000;
  background: linear-gradient(currentColor, currentColor) bottom / 0 0.1em
    no-repeat;
  transition: 1s background-size;
  font-family: "Outfit", sans-serif;

  &:hover {
    text-decoration: none;
    color: #000;
    background-size: 100% 0.1em;
    font-family: "Outfit", sans-serif;
    cursor: pointer;
  }
`;

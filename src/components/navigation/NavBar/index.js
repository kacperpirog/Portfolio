import React from "react";
import { StyledLink, StyledNav } from "./StyledNavBar";
import profileFoto from "../../../assets/images/profile/foto_KP.jpeg";

const NavBar = () => {
  return (
    <StyledNav>
      <div>
        <img src={profileFoto} alt="foto" />
        <p>Kacper Piróg</p>
      </div>
      <ul>
        <li>
          <StyledLink
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </StyledLink>
        </li>
        <li>
          <StyledLink
            activeClass="active"
            to="Work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </StyledLink>
        </li>
        <li>
          <StyledLink
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;

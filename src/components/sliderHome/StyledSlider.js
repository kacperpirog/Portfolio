import styled from "styled-components";
import foto_02 from "../../assets/images/BG/tlo.jpg";
import { devices } from "../../styles/globalStyles/GlobalStyles";

export const StyledSection = styled.section`
  margin-top: 70px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 30px auto;
  width: 100hv;
  height: 500px;
  padding: 0px 40px 40px 40px;

  background-size: cover;
  flex-direction: column;
  justify-content: center;
`;

export const StyleH2 = styled.h2`
  transition: all 0.3s ease-out;
  display: inline-block;
  font-size: 5.3rem;
  color: #8b8b8b;

  @media ${devices.mobileS} {
    font-size: 2.3rem;
  }
  @media ${devices.laptopL} {
    transition: all 0.3s ease-out;
    display: inline-block;
    font-size: 5.3rem;
    color: #8b8b8b;
  }
  @media ${devices.desktop} {
    transition: all 0.3s ease-out;
    display: inline-block;
    font-size: 5.3rem;
    color: #8b8b8b;
  }

  :hover {
    animation: rubberBand 1s;
    color: #e0d0b0;
    animation-fill-mode: both;
  }

  @keyframes rubberBand {
    0% {
      transform: scale3d(1, 1, 1);
    }
    35% {
      transform: scale3d(1.25, 0.75, 1);
    }
    45% {
      transform: scale3d(0.75, 1, 1);
    }
    60% {
      transform: scale3d(1.2, 0.8, 1);
    }
    75% {
      transform: scale3d(1.05, 1.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

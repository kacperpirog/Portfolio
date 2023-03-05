import styled from "styled-components";

import { devices } from "../../styles/globalStyles/GlobalStyles";

export const StyledSection = styled.section`
  margin-top: 70px;
`;

export const StyledDiv = styled.div`
  display: flex;
  /*align-items: left;
  justify-content: left; */
  margin: 30px auto;
  width: 100hv;
  height: 500px;
  padding: 0px 40px 40px 40px;
  flex-direction: column;
  justify-content: center;
  div {
  }
`;

export const StyleH2 = styled.h2`
  transition: all 0.3s ease-out;
  display: inline-block;
  font-size: 3.3rem;
  color: #fff;

  @media ${devices.mobileS} {
    font-size: 2.3rem;
  }
  @media ${devices.laptopL} {
    transition: all 0.3s ease-out;
    display: inline-block;
    font-size: 3.3rem;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(153, 90, 223, 0.4),
      -1px -1px 5px rgba(19, 158, 179, 0.4);
  }
  @media ${devices.desktop} {
    transition: all 0.3s ease-out;
    display: inline-block;
    font-size: 3.3rem;
    color: #fff;
  }

  :hover {
    animation: rubberBand 1s;
    color: #1fa5c8;
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

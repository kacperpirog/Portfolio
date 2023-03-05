import styled from "styled-components";
import profileFoto_02 from "../../assets/images/profile/foto_KP_02.jpg";
import profileFoto_01 from "../../assets/images/profile/foto_KP_01.jpg";
import { devices } from "../../styles/globalStyles/GlobalStyles";

export const StyledSection = styled.section`
  display: flex;
  width: 85vw;
`;

export const StyledDiv = styled.div`
  display: flex;
  margin: 30px auto;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  h3 {
    width: 50vw;
    margin-top: 20px;
  }
  h6 {
    padding: 0 19px;
  }
`;
export const StyledDivCircle = styled.div`
  position: absolute;
  filter: none;
  margin-top: 20px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  left: 50%;
  box-shadow: 1px 1px 20px rgba(153, 90, 223, 0.4),
    -1px -1px 5px rgba(19, 158, 179, 0.4);

  div {
    position: relative;
    box-shadow: 1px 1px 20px rgba(153, 90, 223, 0.4),
      -1px -1px 5px rgba(19, 158, 179, 0.4);
    margin-top: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    left: 50%;
    background-image: url(${profileFoto_02});
    background-size: cover;
    transition: all 0.3s ease-out;
    :hover {
      background-image: url(${profileFoto_01});
      transition: all 0.3s ease-out;
    }
  }

  @media ${devices.mobileS} {
    position: inherit;
  }
  @media ${devices.laptopL} {
    position: absolute;
  }
  @media ${devices.desktop} {
    position: absolute;
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

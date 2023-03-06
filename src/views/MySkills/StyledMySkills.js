import styled from "styled-components";

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledDivAnimationSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledAnimationsDiv = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 400px;
    display: block;
    vector-effect: non-scaling-stroke;
  }

  .wrap {
    animation: rotation 30s infinite linear;
    transform-origin: center center;
    pointer-events: all;
    &:hover {
      animation-play-state: paused;
      text {
        animation-play-state: paused;
      }
      .point-group {
        opacity: 0.5;
      }
    }
  }

  .ring {
    stroke: "white";
    fill: transparent;
    opacity: 0;
    vector-effect: non-scaling-stroke;
    animation: rotation 100s infinite linear reverse;
    transform-origin: center center;
  }

  .point {
    fill: white;
  }

  .point-group {
    transition: transform 1s, opacity 1s;
    transform-origin: center center;
    transform-box: fill-box;
    pointer-events: all;
    pointer-events: "bounding-box";
    position: relative;
    transition-delay: 0.25s;
    &:hover {
      transition: transform 0.5s, opacity 0.5s;
      transform: scale(1.1);
      transition-delay: 0s;
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 1));
      z-index: 1;
      opacity: 1 !important;
    }
  }

  .point-wrapper {
    animation-name: shake;
    animation-duration: 5s;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .outline {
    fill: transparent;

    stroke: white;
    vector-effect: non-scaling-stroke;
  }

  text {
    fill: #e0d0b0;
    font-size: 5px;
    text-anchor: middle;
    &::after {
      fill: #000;
      display: block;
      content: "";
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: white;
    }
  }

  .skill-react {
    position: relative;
  }

  g {
    .point:nth-child(2n) {
      animation-delay: -10s;
      animation-duration: 1s;
      box-shadow: white 1px 1px;
    }
    .point:nth-child(3n) {
      animation-delay: -3s;
      animation-duration: 1s;
    }
    .point:nth-child(4n) {
      animation-delay: -2s;
      animation-duration: 1s;
    }
  }

  text {
    animation: rotation 30s reverse linear infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(0.2%, 0.1%);
    }
    10% {
      transform: translate(-0.1%, -0.2%);
    }
    20% {
      transform: translate(-0.3%, 0%);
    }
    30% {
      transform: translate(0%, 0.2%);
    }
    40% {
      transform: translate(0.1%, -0.1%);
    }
    50% {
      transform: translate(-0.1%, 0.2%);
    }
    60% {
      transform: translate(-0.3%, 0.1%);
    }
    70% {
      transform: translate(0.2%, 0.1%);
    }
    80% {
      transform: translate(-0.1%, -0.1%);
    }
    90% {
      transform: translate(0.2%, 0.2%);
    }
    100% {
      transform: translate(0.7%, 0.1%);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledDivSkils = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    min-width: 10rem;
    max-width: 50vw;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul {
    margin: 12px;
    background: linear-gradient(
      90deg,
      rgba(153, 90, 223, 1) 50%,
      rgba(24, 143, 163, 1) 100%
    );
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(153, 90, 223, 0.4),
      -1px -1px 5px rgba(19, 158, 179, 0.4);
    color: white;
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 25px;
  }
`;

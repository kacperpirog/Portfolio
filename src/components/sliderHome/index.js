import React from "react";
import "react-awesome-slider/dist/styles.css";
import {
  StyledDiv,
  StyledDivCircle,
  StyledSection,
  StyleH2,
} from "./StyledSlider";
import { textHome } from "../../localData";
import { BtnShowProject } from "../../views/Work/StyledWork";
import { StyledAnimationsDiv } from "../../views/MySkills/StyledMySkills";

const SliderHome = () => {
  const setUpSpaceInText = (id, index) => {
    if (
      (id === 2 && index === 3) ||
      (id === 3 && index === 8) ||
      (id === 4 && index === 7)
    ) {
      return "\xa0";
    }
  };
  const openInNewTab = () => {
    const url = "../../assets/cv_kacper_pirog_JFD_EN_web.pdf"; // zastąpić właściwym adresem URL
    window.open(url, "_blank");
  };
  return (
    <StyledSection>
      <StyledDiv>
        <div>
          {textHome.map(({ textHome, id }) => {
            return (
              <ul>
                <li key={id}>
                  <>
                    {textHome.split("").map((word, index) => (
                      <StyleH2>
                        {setUpSpaceInText(id, index)}
                        {word}
                      </StyleH2>
                    ))}
                  </>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <h3>
            As a Frontend Developer with a Graphic Designer background,
            <br /> I possess the knowledge and skills necessary to design and
            create responsive and visually appealing websites. By combining my
            knowledge in graphic design and programming, I am able to create
            websites that blend aesthetic beauty with functionality and ease of
            use.
          </h3>
          <BtnShowProject onClick={() => openInNewTab()}>
            <h6>Download CV</h6>
          </BtnShowProject>
        </div>
        <StyledDivCircle>
          <StyledAnimationsDiv>
            <div class="container">
              <svg viewBox="0 0 120 120">
                <defs>
                  <g id="point" class="point-wrapper">
                    <circle
                      class="point"
                      r="0.75"
                      stroke="white"
                      fill="white"
                    />
                    <circle class="outline" r="2" stroke="white" fill="none" />
                  </g>
                </defs>
                <circle class="ring" r="59" cx="60" cy="60" stroke="white" />
                <circle class="ring" r="40" cx="60" cy="60" stroke="white" />
                <circle class="ring" r="20" cx="60" cy="60" stroke="white" />
                <g class="wrap" pointer-events="all">
                  <g class="point-group">
                    <g class="skill" transform="translate(65, 46)">
                      <i x="0%" y="5%" className="fas fa-globe-europe" />
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(40, 40)">
                      <text x="0%" y="5%">
                        Typescript
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(65, 69)">
                      <text x="0%" y="5%">
                        Javascript
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(55, 65)">
                      <text x="0%" y="5%">
                        CSS
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(57, 54)">
                      <text x="0%" y="5%">
                        HTML
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(90, 100)">
                      <text x="0%" y="5%">
                        React
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(22, 70)">
                      <text x="0%" y="5%">
                        API
                      </text>
                    </g>
                  </g>
                  <g class="point-group">
                    <g class="skill" transform="translate(100, 70)">
                      <text x="0%" y="5%">
                        Bootstarp
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </StyledAnimationsDiv>
          <div className="divStyled"></div>
        </StyledDivCircle>
      </StyledDiv>
    </StyledSection>
  );
};

export default SliderHome;

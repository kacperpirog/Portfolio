import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { StyledAnimationsDiv, StyledSection } from "./StyledMySkills";

const MySkills = () => {
  return (
    <StyledSection>
      <div>
        <StyleH2>M</StyleH2>
        <StyleH2>y</StyleH2>
        <StyleH2>{"\xa0"}S</StyleH2>
        <StyleH2>k</StyleH2>
        <StyleH2>i</StyleH2>
        <StyleH2>l</StyleH2>
        <StyleH2>l</StyleH2>
        <StyleH2>s</StyleH2>
      </div>
      <div>
        <StyledAnimationsDiv>
          <div class="container">
            <svg viewBox="0 0 120 120">
              <defs>
                <g id="point" class="point-wrapper">
                  <circle class="point" r="0.75" stroke="white" fill="white" />
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
      </div>
    </StyledSection>
  );
};

export default MySkills;

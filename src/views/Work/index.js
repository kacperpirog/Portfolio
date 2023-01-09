import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { localData } from "../../localData/index";
import {
  StyledSection,
  StyledUl,
  StyledDiv,
  BtnShowProject,
} from "../Work/StyledWork";

const Work = () => {
  return (
    <StyledSection>
      <div>
        <StyleH2>W</StyleH2>
        <StyleH2>o</StyleH2>
        <StyleH2>r</StyleH2>
        <StyleH2>k</StyleH2>
      </div>
      <div>
        <StyledUl>
          {localData.map(({ image, nameGit, id, nameLive, name }) => {
            return (
              <li key={id}>
                <StyledDiv>
                  <img src={image} alt={name} />
                  <div>
                    <BtnShowProject onClick={nameGit}>
                      <span>{name} GITHUB</span>
                    </BtnShowProject>

                    <BtnShowProject onClick={nameLive}>
                      <span> {name} demo live</span>
                    </BtnShowProject>
                  </div>
                </StyledDiv>
              </li>
            );
          })}
        </StyledUl>
      </div>
    </StyledSection>
  );
};

export default Work;

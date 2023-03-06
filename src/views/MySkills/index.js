import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { mySkillsExp } from "../../localData";
import {
  StyledDivAnimationSkills,
  StyledDivSkils,
  StyledSection,
} from "./StyledMySkills";

const MySkills = () => {
  return (
    <>
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
        <StyledDivAnimationSkills>
          <StyledDivSkils>
            <div>
              {mySkillsExp.map(({ id, text }) => {
                return (
                  <ul>
                    <li key={id}>
                      <p>{text}</p>
                    </li>
                  </ul>
                );
              })}
            </div>
          </StyledDivSkils>
        </StyledDivAnimationSkills>
      </StyledSection>
    </>
  );
};

export default MySkills;

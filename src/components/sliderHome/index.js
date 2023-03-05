import React from "react";
import "react-awesome-slider/dist/styles.css";
import {
  StyledDiv,
  StyledDivCircle,
  StyledSection,
  StyleH2,
} from "./StyledSlider";
import { textHome } from "../../localData";

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
            For over several years, my interests have oscillated around
            programming. I started gaining experience with a bootcamp, which
            lasted 9 months. Then I learned the basics: HTML, CSS, RWD,
          </h3>
        </div>
        <StyledDivCircle>
          <div></div>
        </StyledDivCircle>
      </StyledDiv>
    </StyledSection>
  );
};

export default SliderHome;

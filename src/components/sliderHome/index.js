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
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
            As a Frontend Developer with a Graphic Designer background, I <br />
            possess the knowledge and skills necessary to design and create
            responsive and visually appealing websites. By combining my
            knowledge in graphic design and programming, I am able to create
            websites that blend aesthetic beauty with functionality and ease of
            use.
          </h3>
          <BtnShowProject onClick={() => openInNewTab()}>
            <h6>Download CV</h6>
          </BtnShowProject>
        </div>
        <StyledDivCircle>
          <div></div>
        </StyledDivCircle>
      </StyledDiv>
    </StyledSection>
  );
};

export default SliderHome;

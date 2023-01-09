import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { StyledSection } from "./StyledAbout";

const About = () => {
  return (
    <StyledSection>
      <div>
        <StyleH2>A</StyleH2>
        <StyleH2>b</StyleH2>
        <StyleH2>o</StyleH2>
        <StyleH2>u</StyleH2>
        <StyleH2>t</StyleH2>
      </div>
      <div>
        <h3>
          I started programming around 2 years ago. I deepen my knowledge under
          the watchful eye of experienced developer. In May 2021 I decided to
          focus on specific framework that is React. Since then I started to
          create more advanced projects that allowed me to progress and
          consolidate my skills. Currently I am looking for commercial projects
          thanks to which I could get experience.
        </h3>
      </div>
    </StyledSection>
  );
};

export default About;

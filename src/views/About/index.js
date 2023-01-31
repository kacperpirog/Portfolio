import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { StyledSection } from "./StyledAbout";

const About = () => {
  return (
    <StyledSection>
      <section>
        <StyleH2>A</StyleH2>
        <StyleH2>b</StyleH2>
        <StyleH2>o</StyleH2>
        <StyleH2>u</StyleH2>
        <StyleH2>t</StyleH2>
      </section>
      <div>
        <h3>
          For over several years, my interests have oscillated around
          programming. I started gaining experience with a bootcamp, which
          lasted 9 months. Then I learned the basics: HTML, CSS, RWD, Bootstrap,
          Git, JavaScript ES6, AJAX, React, Redux, NPM, Webpack. In addition,
          for two years I expanded my knowledge related to IT during lessons
          taken from an experienced senior programmer, with his help I improved
          my React workshop.
        </h3>
      </div>
    </StyledSection>
  );
};

export default About;

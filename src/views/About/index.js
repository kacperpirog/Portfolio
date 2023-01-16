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
        <p>
          Od ponad kilku lat, moje zainteresowania oscylują wokół programowania.
          Zdobywanie doświadczenia zacząłem od bootcampa, który trwał 9
          miesięcy. Nauczyłem się wówczas podstaw: HTML, CSS, RWD, Bootstrap,
          Git, JavaScript ES6, AJAX, React, Redux, NPM, Webpack. Ponadto przez
          dwa lata poszerzałem swoją wiedzę związaną z IT podczas lekcji
          pobieranych u doświadczonego starszego programisty, przy jego pomocy
          podszkoliłem swój warsztat związany z React-em.
        </p>
      </div>
    </StyledSection>
  );
};

export default About;

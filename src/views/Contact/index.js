import React from "react";
import ContactForm from "../../components/forms/ContactForm/";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { StyledSection } from "./StyledContact";

const Contact = () => {
  return (
    <StyledSection>
      <div>
        <StyleH2> C </StyleH2>
        <StyleH2> o </StyleH2>
        <StyleH2> n </StyleH2>
        <StyleH2> t </StyleH2>
        <StyleH2> a </StyleH2>
        <StyleH2> c </StyleH2>
        <StyleH2> t </StyleH2>
      </div>
      <ContactForm />
    </StyledSection>
  );
};

export default Contact;

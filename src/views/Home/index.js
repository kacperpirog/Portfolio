import React from "react";
import { Element } from "react-scroll";
import SliderHome from "../../components/sliderHome";
import About from "../About";
import MySkills from "../MySkills";
import Work from "../Work";
import Contact from "../Contact";

const Home = () => {
  return (
    <div>
      <Element name="Home" className="element">
        <SliderHome />
      </Element>
      <Element name="About" className="element">
        <About />
      </Element>
      <Element name="Skills" className="element">
        <MySkills />
      </Element>
      <Element name="Work" className="element">
        <Work />
      </Element>
      <Element name="Contact" className="element">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;

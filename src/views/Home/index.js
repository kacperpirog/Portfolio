import React, { useState } from "react";
import { Element } from "react-scroll";
import SliderHome from "../../components/sliderHome";
import MySkills from "../MySkills";
import Work from "../Work";
import Contact from "../Contact";
import { StyleDivLoading } from "./StyledHome";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return (
      <StyleDivLoading>
        <div>
          <h1>Loading...</h1>
        </div>
      </StyleDivLoading>
    );
  }
  return (
    <div>
      <Element name="Home" className="element">
        <SliderHome />
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

import React from "react";
import { StyleH2 } from "../../components/sliderHome/StyledSlider";
import { localData } from "../../localData/index";
import {
  StyledSection,
  StyledUl,
  StyledDiv,
  BtnShowProject,
  StyledDivSelect,
  CerImg,
} from "../Work/StyledWork";
import cer_pl from "../../assets/images/EN_Kacper-Pirog-Certificate.jpg";

const Work = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
          {localData.map(
            ({ image, nameGit, id, nameLive, name, title, text }) => {
              return (
                <ul>
                  <li key={id}>
                    <StyledDiv>
                      <img src={image} alt={name} />

                      <h2>{title}</h2>
                      <h3>TECHNOLOGICAL SPECIFICATION:</h3>
                      <h4>{text}</h4>
                      <StyledDivSelect>
                        <BtnShowProject onClick={() => openInNewTab(nameGit)}>
                          <h6> Check on GitHub</h6>
                        </BtnShowProject>

                        <BtnShowProject onClick={() => openInNewTab(nameLive)}>
                          <h6> Live preview</h6>
                        </BtnShowProject>
                      </StyledDivSelect>
                    </StyledDiv>
                  </li>
                </ul>
              );
            }
          )}
        </StyledUl>
      </div>
      <CerImg>
        <img src={cer_pl} alt={cer_pl} />
      </CerImg>
    </StyledSection>
  );
};

export default Work;

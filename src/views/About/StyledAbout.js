import styled from "styled-components";
import { devices } from "../../styles/globalStyles/GlobalStyles";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin: 0 auto;
  width: 90%;
  height: 500px;
  padding: 40px 40px 40px 40px;
  background: #fff;
  h3 {
    text-align: center;
  }
  div {
    width: 50%;
  }
  @media ${devices.mobileS} {
    div {
      width: 80%;
    }
  }
`;

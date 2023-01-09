import styled from "styled-components";
import foto_02 from "../../assets/images/BG/tlo.jpg";

export const StyledSection = styled.section`
  display: flex;
  background: url(${foto_02});
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 40px 40px 40px;
  li {
    margin: 1rem;
    background: #fff;
    padding: 2rem;
  }

  img {
    width: 300px;
  }
`;

export const StyledDiv = styled.div`
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const BtnShowProject = styled.button`
  flex: 1 0 0;
  text-align: center;
  box-sizing: border-box;
  margin: 0.2rem 0.2rem;
  padding: 0.2rem 0.2rem;
  background: none;
  color: #000;
  border: 1px solid #e0d0b0;
  transition: all 0.5s;
  font-size: 15px;
  height: 5rem;
  :hover {
    cursor: pointer;
  }

  position: relative;
  overflow: hidden;
  border: 0;
  box-shadow: inset 0 0 0 1px #e0d0b0;
  :before,
  :after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    content: "";
  }
  :before {
    background: #e0d0b0;
    border: 1px solid #e0d0b0;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.3s ease-in;
  }
  :after {
    background: #fff;
    border: 2px solid #e0d0b0;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.25s ease-out 0.29s;
  }
  span {
    position: relative;
    z-index: 10;
  }
  :hover {
    :before,
    :after {
      transform: translate3d(0, 0, 0);
    }
  }
`;

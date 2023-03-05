import styled from "styled-components";

export const StyledDivSelect = styled.div``;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;

  justify-content: center;
  margin: 0 auto;
  padding: 40px 40px 40px 40px;
  align-items: initial;
   position: absolute
    bottom: 0; 
  ul {
   
    width: 350px;
    display: flex;
    align-items: inherit;
  }
  li {
  
   
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(153, 90, 223, 0.4),
      -1px -1px 5px rgba(19, 158, 179, 0.4);
    padding: 1rem;

    h3 {
      margin-top: 20px;
    }
  }

  img {
    border-radius: 15px; 
    width: 285px;
    margin-bottom: 1.5rem;
    box-shadow: 1px 1px 15px rgba(153, 90, 223, 0.4),
      -1px -1px 15px rgba(19, 158, 179, 0.4);
  }
`;

export const StyledDiv = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
  h4 {
    height: 90px;
  }
`;

export const BtnShowProject = styled.button`
  flex: 1 0 0;
  text-align: center;
  box-sizing: border-box;
  margin: 0.2rem 0.2rem;
  padding: 0.2rem 0.2rem;
  transition: all 0.5s;
  font-size: 15px;
  height: 3rem;
  border-radius: 25px;
  box-shadow: 1px 1px 5px rgba(250, 250, 250, 0.4);
  position: relative;
  overflow: hidden;
  border: 0;
  background: none;
  color: #fff;
  :hover {
    cursor: pointer;
  }

  :before,
  :after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(153, 90, 223, 0.4),
      -1px -1px 5px rgba(19, 158, 179, 0.4);

    content: "";
  }
  :before {
    background: linear-gradient(
      90deg,
      rgba(153, 90, 223, 1) 50%,
      rgba(24, 143, 163, 1) 100%
    );
    color: #fff;

    transform: translate3d(-100%, 0, 0);
    transition: transform 0.3s ease-in;
  }

  h6 {
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

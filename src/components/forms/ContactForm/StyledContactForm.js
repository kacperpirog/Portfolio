import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    input {
      width: 2rem;
      height: 3rem;
      margin: 0.3rem;
    }
    div {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
  margin: 0.3rem;
  :focus,
  :active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 3px solid rgb(26, 33, 43);
    outline: none;
  }
`;

export const BtnFormSend = styled.button`
  text-align: center;
  box-sizing: border-box;
  margin: 0.2rem 0.2rem;
  padding: 0.2rem 0.2rem;
  background: none;
  color: #000;
  border: 1px solid #e0d0b0;
  transition: all 0.5s;
  font-size: 15px;
  height: 3rem;
  width: 6rem;

  :hover {
    cursor: pointer;
    background: #000;
    color: #fff;
    border: 1px solid #e0d0b0;
    transition: all 0.5s;
  }
`;

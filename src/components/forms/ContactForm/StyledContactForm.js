import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background: #e1e1e1;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  ::placeholder {
    color: #000;
  }
  :focus,
  :valid {
    top: -20px;
    left: 0;
    color: #1f1f1f;
    font-size: 14px;
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
    background: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all 0.5s;
  }
`;

import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(153, 90, 223, 0.4),
    -1px -1px 5px rgba(19, 158, 179, 0.4);
  padding: 1rem;
  margin: 20px;
  h6 {
    width: 5rem;
  }
  h5 {
    color: #f50e07;
  }
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
    label {
      color: #fff;
      margin: 20px 10px 20px 0;
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
    color: #fff;
  }
  :focus,
  :valid {
    top: -20px;
    left: 0;
    color: #fff;
    font-size: 14px;
  }
`;

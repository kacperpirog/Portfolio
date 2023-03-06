import React from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { StyledForm, BtnFormSend, StyledInput } from "./StyledContactForm";
import { BtnShowProject } from "../../../views/Work/StyledWork";

const contactFormValidationsSchema = Yup.object().shape({
  name: Yup.string().required("Enter your Name"),
  email: Yup.string().required("Enter your E-mail"),
  subject: Yup.string().required("Enter your Subject"),
  message: Yup.string().required("Enter your Message"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept Terms"),
});

const FormContact = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={contactFormValidationsSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVER_EMAILJS,
              process.env.REACT_APP_TEMPLATE_EMAILJS,
              values,
              process.env.REACT_APP_USERS_EMAILJS
            )
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <>
            <StyledForm>
              <StyledInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" />
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="subject" />
              <StyledInput
                type="text"
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
              />
              <ErrorMessage name="subject" />
              <StyledInput
                type="message"
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
              />
              <ErrorMessage name="message" />
              <section>
                <label htmlFor="acceptTerms">Accept to send</label>
                <input
                  className="accespt__Term__Styled"
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  value={values.acceptTerms}
                  checked={values.acceptTerms}
                  onChange={handleChange}
                />
              </section>
              <div>
                <BtnShowProject type="submit">
                  <h6>SEND</h6>
                </BtnShowProject>
              </div>
              <ErrorMessage name="acceptTerms" />
            </StyledForm>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormContact;

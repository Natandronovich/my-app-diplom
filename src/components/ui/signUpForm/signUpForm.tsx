import { Formik } from "formik";
import * as yup from "yup";
import { FormContainer, formStyles } from "../loginForm/loginSignUpForm.styled";
import { fieldStyles } from "../../shared/field/field.styles";
import { signUpStyles } from "./signUpStyle";
import { Button } from "../../shared/button/button";

export const SignUpForm = () => {
  const validationsSchema = yup.object().shape({
    userName: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid email"),
    password: yup.string().required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password mismatch")
      .required("Required"),
  });

  return (
    <div style={signUpStyles.signUpWrapper}>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          alert(
            `
            NAME: ${values.userName}
            EMAIL: ${values.email}
            PASSWORD: ${values.password}`
          );
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <div style={formStyles.formHeader}>
                <div style={formStyles.formTitle}>Sign Up </div>
                <div style={formStyles.formUnderline}></div>
              </div>
              <div style={signUpStyles.formInputs}>
                <div style={formStyles.formInput}>
                  <input
                    style={fieldStyles.loginFormInput}
                    type="text"
                    placeholder="Name"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  {touched.userName && errors.userName && (
                    <div style={fieldStyles.signUpFormError}>
                      {errors.userName}
                    </div>
                  )}
                </div>
                <div style={formStyles.formInput}>
                  {" "}
                  <input
                    style={fieldStyles.loginFormInput}
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <div style={fieldStyles.signUpFormError}>
                      {errors.email}
                    </div>
                  )}
                </div>
                <div style={formStyles.formInput}>
                  <input
                    style={fieldStyles.loginFormInput}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <div style={fieldStyles.signUpFormError}>
                      {errors.password}
                    </div>
                  )}
                </div>
                <div style={formStyles.formInput}>
                  {" "}
                  <input
                    style={fieldStyles.loginFormInput}
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div style={fieldStyles.signUpFormError}>
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
              <Button
                id="btnSignup"
                className="button"
                buttonText="Submit"
                disabled={!isValid && !dirty}
                type="submit"
              />
            </FormContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};

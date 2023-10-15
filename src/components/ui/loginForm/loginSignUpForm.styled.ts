import styled from "styled-components";

export const FormContainer = styled.form`
  min-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;
interface FormStyleType {
  [key: string]: React.CSSProperties;
}

export const formStyles: FormStyleType = {
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    // maxWidth: '1200px',
    margin: "0 auto",
    padding: "0 15px",
  },
  formHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: "14px",
  },
  formTitle: {
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "30px",
    color: "#5c62ec",
  },
  formUnderline: {
    width: "61px",
    height: "4px",
    borderRadius: "6px",
    background: "#5c62ec",
  },
  formInputs: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginTop: "25px",
    position: "relative",
  },
  formInput: {
    display: "flex",
    alignItems: "center",
    background: "#f6f4f4",
    borderRadius: "6px",
    transition: "all 0.3s ease-out",
  },
  showPassword: {
    position: "absolute",
    top: "65%",
    right: "5%",
    width: "30px",
    height: "30px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  formError: {
    color: "red",
  },
  formSubmitContainer: {
    display: "flex",
    gap: "30px",
    margin: "25px auto",
  },
};

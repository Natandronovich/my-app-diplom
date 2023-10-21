interface SignUpFormStyleType {
    [key: string] : React.CSSProperties;
};

export const signUpStyles: SignUpFormStyleType = {
    signUpWrapper:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0",
    },
    formInputs: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        marginTop: "25px",
        margin: "25px 0",
      },
  };
  
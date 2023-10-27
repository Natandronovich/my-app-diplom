interface FieldStyleType {
    [key: string] : React.CSSProperties;
};

export const fieldStyles: FieldStyleType={
    loginFormInput:{
        height: '50px',
        width:'100%',
        display: 'block',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        transition: 'all 0.3s ease-out',
    },
    signUpFormError:{
        color: "red",
    }
}
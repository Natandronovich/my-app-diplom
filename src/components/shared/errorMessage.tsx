import { formStyles } from "../ui/loginForm/loginSignUpForm.styled";

interface ErrorMessageProps {
  errorText: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <div style={formStyles.formError}>{props.errorText}</div>;
};

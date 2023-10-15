import "./buttonStyle.css";

interface ButtonProps {
  id: string;
  className: string;
  buttonText: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  //   const handleSubmit = () => {
  //     dataFromAuthContext.loginF();
  //     navigate("/users");
  //   };

  return (
    <button id={props.id} className={props.className}>
      {props.buttonText}
    </button>
  );
};

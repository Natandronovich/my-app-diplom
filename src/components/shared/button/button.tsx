import { useNavigate } from "react-router-dom";
import "./buttonStyle.css";
import { useContext } from "react";
import { AuthContext } from "../../../authContext/authProvider";

interface ButtonProps {
  id: string;
  className: string;
  buttonText?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
}

export const Button = (props: ButtonProps) => {
  const navigate = useNavigate();

  const dataFromAuthContext: any = useContext(AuthContext);

  const sendData = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetItem = event.target as HTMLButtonElement;

    switch (targetItem.id) {
      case "button-login":
        console.log("Submit...");
        break;
      case "button-signup":
        goToSignUp();
        break;
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <button id={props.id} className={props.className} onClick={sendData}>
      {props.buttonText}
    </button>
  );
};

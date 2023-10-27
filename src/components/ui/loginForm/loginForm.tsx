import { FormContainer, formStyles } from "./loginSignUpForm.styled";
import { Button } from "../../shared/button/button";
import { FormInput } from "../../shared/field/field";
import { useContext, useEffect, useState } from "react";
import { ErrorMessage } from "../../shared/errorMessage";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../authContext/authProvider";

export const LoginForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const navigate = useNavigate();

  const dataFromAuthContext: any = useContext(AuthContext);

  const dataFromNavigate = useLocation();

  const handleChange: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetItem = event.target;

    switch (targetItem.id) {
      case "userName":
        setUserName(targetItem.value);
        break;
      case "password":
        setPassword(targetItem.value);
        break;
    }
  };

  const showHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const regularExpressionPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (userName.length < 4 && userName.length > 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [userName]);

  const handleBlur: any = (event: React.FocusEvent<HTMLInputElement>): void => {
    switch (event.target.id) {
      case "userName":
        if (userName.length < 4 && userName.length > 0) {
          setNameError(true);
        } else {
          setNameError(false);
        }
        break;

      case "password":
        password.length > 0 && regularExpressionPassword.test(password)
          ? setPasswordError(false)
          : setPasswordError(true);
        break;
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(userName, password);
    if (userName && password) {
      dataFromAuthContext.loginF();
      navigate(`/recipes/${dataFromNavigate.state}`, { replace: true });
    }
  };

  // const goToSignUp = () => {
  //   navigate("/signup");
  // };

  return (
    <div style={formStyles.formWrapper}>
      <FormContainer onSubmit={handleSubmit}>
        <div style={formStyles.formHeader}>
          <div style={formStyles.formTitle}>Log in</div>
          <div style={formStyles.formUnderline}></div>
        </div>
        <div style={formStyles.formInputs}>
          <div style={formStyles.formInput}>
            <FormInput
              labelText="userName"
              name="username"
              id="userName"
              type="text"
              placeholder="Username or email"
              onChange={handleChange}
              value={userName}
              onBlur={handleBlur}
            />
            {nameError && <ErrorMessage errorText="Username error!" />}
          </div>
          <div style={formStyles.formInput}>
            <FormInput
              labelText="Password"
              name="password"
              id="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={password}
              onBlur={handleBlur}
            />
            {nameError && <ErrorMessage errorText="Password error!" />}
            <button
              style={formStyles.showPassword}
              className="show-password"
              type="button"
              onClick={showHidePassword}
            >
              {isShowPassword ? (
                <svg width="30" height="30">
                  <g transform="scale(0.03125 0.03125)">
                    <path d="M259.478 668.522c-111.728-65.958-163.478-156.522-163.478-156.522s128-224 416-224c41.744 0 80.127 4.706 115.246 12.754l-86.489 86.489c-9.244-2.122-18.869-3.243-28.757-3.243-70.692 0-128 57.308-128 128 0 9.888 1.121 19.513 3.243 28.757l-127.765 127.765zM396.754 723.246c35.119 8.048 73.502 12.754 115.246 12.754 288 0 416-224 416-224s-51.751-90.564-163.478-156.522l-127.765 127.765c2.122 9.244 3.243 18.869 3.243 28.757 0 70.692-57.308 128-128 128-9.888 0-19.513-1.121-28.757-3.243l-86.489 86.489zM608 512c0 24.569-9.373 49.137-28.118 67.882s-43.314 28.118-67.882 28.118l96-96zM512 416c-24.569 0-49.137 9.373-67.882 28.118s-28.118 43.314-28.118 67.882l96-96zM768 224l-544 544 32 32 544-544-32-32z"></path>
                  </g>
                </svg>
              ) : (
                <svg width="30" height="30">
                  <g transform="scale(0.03125 0.03125)">
                    <path d="M512 288v0c288 0 416 224 416 224s-128 224-416 224c-288 0-416-224-416-224s128-224 416-224zM512 640c70.692 0 128-57.308 128-128s-57.308-128-128-128c-70.692 0-128 57.308-128 128s57.308 128 128 128v0zM512 608v0c-53.019 0-96-42.981-96-96s42.981-96 96-96c53.019 0 96 42.981 96 96s-42.981 96-96 96zM512 544c17.673 0 32-14.327 32-32s-14.327-32-32-32c-17.673 0-32 14.327-32 32s14.327 32 32 32v0z"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div style={formStyles.formSubmitContainer}>
          <Button
            id="button-login"
            className="button btn-login"
            buttonText="Log in"
          />
          {/* <button onClick={goToSignUp}>Sign up</button> */}
          <Button id="button-signup" className="button" buttonText="Sign up" />
        </div>
      </FormContainer>
    </div>
  );
};

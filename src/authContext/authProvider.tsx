import React, { FC, useState } from "react";

interface AuthContextData {
  userAuth: boolean;
  loginF: () => void;
  logoutF: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  const logIn = () => {
    setIsUserAuth(true);
  };

  const logOut = () => {
    setIsUserAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ userAuth: isUserAuth, loginF: logIn, logoutF: logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

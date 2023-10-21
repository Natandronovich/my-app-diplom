import { useContext } from "react";
import { AuthContext } from "./authProvider";
import { Navigate, useParams } from "react-router-dom";

interface CheckAuthUserProps {
  children: JSX.Element;
}

export const CheckAuthUser = ({ children }: CheckAuthUserProps) => {
  const { userAuth } = useContext(AuthContext);

  const paramsFromUrl = useParams();
  console.log("paras url", paramsFromUrl);

  if (!userAuth) {
    return (
      <div>
        <Navigate to="/login" state={paramsFromUrl.id} replace={true} />
      </div>
    );
  } else {
    return children;
  }
};

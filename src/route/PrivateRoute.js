import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  // console.log(children)
  const navigate = useNavigate();
  const { isSignIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSignIn === false) {
      // console.log(isSignIn, 'cek data dari redux')
      if (isSignIn == true) {
        navigate("/sign-in", { replace: true });
      }
    }
  }, [isSignIn]);
  return children;
};

export default PrivateRoute;

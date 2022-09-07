import { useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PublicRoute = ({ children, isRestricted = false }) => {
  const navigate = useNavigate();
  const { isSignIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isRestricted) {
      // console.log(isSignIn, 'cek data redux')
      if (isSignIn == true) {
        navigate("/", { replace: true });
      }
    }
  }, [isSignIn]);
  return children;
};

export default PublicRoute;

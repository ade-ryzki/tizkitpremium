import React, { useEffect } from "react";
import NavbarLogin from "../../../../Component/NavbarLogin";
import { Sidebar } from "../../Component/Sidebar";
import MetaTags from "./../../Component/Metatags";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DashboardAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //coment
  const { data, error, loading } = useSelector((state) => state.movie); //coment
  const { isSignIn } = useSelector((state) => state.auth); //coment
  useEffect(() => {
    if (isSignIn === false) {
      // change == to ===
      navigate("/sign-in", { replace: true });
    }
  }, [isSignIn]);

  return (
    <>
      <MetaTags title="Tickitz - Dashboard Admin" />
      <NavbarLogin />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </>
  );
};

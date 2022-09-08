import { Link } from "react-router-dom";
import tickitz from "../img/Tickitz.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogOut } from "../redux/actions/Auth";
import { GetMovie } from "./../redux/actions/Movie";

function Navbar() {
  const dispatch = useDispatch();
  const { isSignIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(GetMovie({ page: 1, limit: 10 }));
  }, []);

  return (
    <>
      <nav className="navbar navbar-desktop navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand">
              <img src={tickitz} alt="logo-tickitz" />
            </div>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link active bold">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile">
                  <div className="nav-link active bold">Profile</div>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/sign-in">
            {/* <button className="btn btn-primary" type="submit">Sign Up</button> */}
            {isSignIn ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(AuthLogOut());
                }}
              >
                Log Out
              </button>
            ) : (
              <Link to="/sign-Up">
                {" "}
                <button className="btn btn-primary">Sign Up</button>
                {" "}
              </Link>
            )}
          </Link>
        </div>
      </nav>
      <nav className="navbar nav-phone navbar-expand-lg bg-white p-2">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img src={tickitz} alt="logo-tickitz" />
          </div>
          <div
            className="hamburger-button d-flex flex-column align-items-end"
            id="navbarNav"
          >
            <div className="line mb-1"></div>
            <div className="line-2 mb-1"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

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
                <button className="btn btn-primary">Sign Up</button>{" "}
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
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <form className="d-flex form-search mt-5 mb-4">
                <button type="submit">
                  <i className="fa fa-search px-3 py-3"></i>
                </button>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <hr />
              <li className="nav-item">
                <Link to="/sign-in">
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
                      <button className="btn btn-primary">Sign Up</button>{" "}
                    </Link>
                  )}
                </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link active bold">Home</div>
                </Link>
              </li>
              <hr />
              <li className="nav-item">
                <Link to="/profile">
                  <div className="nav-link active bold">Profile</div>
                </Link>
              </li>
              <hr />

              <li className="nav-item mt-5">
                <a className="nav-link" href="#">
                  &copy; 2022 Tickitz • Created Bye Ade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

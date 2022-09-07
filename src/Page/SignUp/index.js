import React, { useEffect, useState } from "react";
import logo from "../../img/tickitz-white.svg";
import "../../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { AuthSignUp } from './../../redux/actions/AuthSingUp';

function SignUp() {
    const {data, error, loading, IsSignUp} = useSelector((state)=> state.auth)
  // console.log(loading, 'loading')
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [formSignUp, setFormSignUp]  = useState({
    username: '',
    email: '',
    password: ''
  })
  const handleSignUp = (e)=>{
    e.preventDefault()
    // console.log(formSignIn, 'data login')
    dispatch(AuthSignUp(formSignUp))
  }
  useEffect(()=> {
    if(IsSignUp === true) {
        navigate('sign-in', {replace: true}) //kita menghapus routing login dari browser
    }else {
        navigate('/sign-up', {replace: true})
        
    }
},[IsSignUp])
  return (
    
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 d-none d-md-block image-container"
            style={{
              backgroundImage: `linear-gradient(rgba(43, 21, 107, 0.5), rgba(43, 21, 107, 0.8)), url(./img/image-bg.jpg)`,
            }}
          >
            <div className="title-register">
              <img src={logo} alt="logo" />
              <h1>Lets build your account</h1>
              <p>
                To be a loyal moviegoer and access all of features, your details
                are required
              </p>
              <div className="custom-progress">
                <ul>
                  <li>
                    <span className="active">1</span>
                    <div className="progres">Fill your additional details</div>
                  </li>
                  <li>
                    <span>2</span>
                    <div className="progres">Active your account</div>
                  </li>
                  <li>
                    <span>3</span>
                    <div className="progres">Done</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 form-container-register">
            <form onSubmit={handleSignUp} className="form-box" action="sign_in.html">
              <div className="mb-4">
                <h3>Fill your additional details</h3>
              </div>
              <div className="mb-3 form-input">
                <label htmlFor="exampleInputUserName" className="form-label">
                Username
                </label>
                <input
                  type="Username"
                  className="form-control"
                  id="exampleInputUserName"
                  // aria-describedby="Username"
                  placeholder="Write your Username"
                  required onChange={(e)=>{
                    setFormSignUp((prevData)=>({
                      ...prevData,
                      name: e.target.value
                    }))
                  }}
                />
              </div>
              <div className="mb-3 form-input">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Write your email"
                  required onChange={(e)=>{
                    setFormSignUp((prevData)=>({
                      ...prevData,
                      email: e.target.value
                    }))
                  }}       
                />
              </div>
              <div className="mb-4 form-input">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Write your password"
                  required onChange={(e)=>{
                    setFormSignUp((prevData)=>({
                      ...prevData,
                      password: e.target.value
                    }))
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to terms &amp; conditions
                </label>
              </div>
              <button type="submit" className="btn btn-join-now py-3 mb-4">
                Join for free now
              </button>
              <div className="text-center link mb-4">
                Do you already have an account?
                <Link to="/Sign-in">Log In</Link>
              </div>
              <h6>
                <span>Or</span>
              </h6>
              {/* Mobile */}
              <div className="d-sm-block d-md-none">
                <div className="d-flex justify-content-between mt-4">
                  <Link to="" className="btn btn-login-external py-3">
                    <img src="./icon/ic-google.png" alt="Google" />
                  </Link>
                  <Link to="" className="btn btn-login-external py-3">
                    <img src="./icon/ic-facebook.png" alt="fb" />
                  </Link>
                </div>
              </div>
              {/* Desktop */}
              <div className="d-none d-md-block">
                <div className="d-flex justify-content-between mt-4">
                  <Link to='' className="btn btn-login-external py-3">
                    <img src="./icon/ic-google.png" alt="Google" />Google
                  </Link>
                  <Link to='' className="btn btn-login-external py-3">
                    <img src="./icon/ic-facebook.png" alt="fb" />
                    Facebook
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

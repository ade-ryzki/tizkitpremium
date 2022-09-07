import axios from "axios";

const SignInRequest = () => {
  return {
    type: "SIGNIN_REQUEST",
  };
};

const SignInSucess = (data) => {
  return {
    type: "SIGNIN_SUCCESS",
    payload: data,
  };
};

const SignInError = (error) => {
  return {
    type: "SIGNIN_ERROR",
    payload: error,
  };
};


export const AuthSignIn = (formData) => {
  return (dispatch) => {
    dispatch(SignInRequest());
    axios({
      method: "POST",
      url: `http://localhost:4000/api/v1/auth/login`,
      data: {
        email: formData.email,
        password: formData.password,
      },
    })
      .then((res) => {
        dispatch(SignInSucess(res.data.data));
      })
      .catch((err) => {
        dispatch(SignInError(err.response.data));
      });
  };
};

export const AuthLogOut = () => {
  return {
    type: "AUTH_LOGOUT",
  };
};

//SignUp


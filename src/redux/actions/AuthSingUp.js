// question axios err
import axios from "axios";

const SignUpRequest = () => {
    return {
      type: "SIGNUP_REQUEST",
    };
  };
  
  const SignUpSucess = (data) => {
    return {
      type: "SIGNUP_SUCCESS",
      payload: data,
    };
  };
  
  const SignUpError = (error) => {
    return {
      type: "SIGNUP_ERROR",
      payload: error,
    };
  };
  
  export const AuthSignUp = (formData) => {
    return (dispatch) => {
      dispatch(SignUpRequest());
      axios({
        method: "POST",
        url: `http://localhost:4000/api/v1/auth/register`,
        data: {
            username: formData.name,
            email: formData.email,
            password: formData.password,
        },
      })
        .then((res) => {
          dispatch(SignUpSucess(res.data.data));
        })
        .catch((err) => {
          dispatch(SignUpError(err.response.data));
        });
    };
  };
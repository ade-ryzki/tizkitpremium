import axios from "axios";

const GetMovieRequest = () => {
  return {
    type: "GET_MOVIE_REQUEST",
  };
};

const GetMovieSucess = (data) => {
  return {
    type: "GET_MOVIE_SUCCESS",
    payload: data,
  };
};

const GetMovieError = (error) => {
  return {
    type: "GET_MOVIE_ERROR",
    payload: error,
  };
};

export const GetMovie = ({ page = 1, limit }) => {
  return (dispatch) => {
    dispatch(GetMovieRequest());
    axios({
      method: "GET",
      url: `http://localhost:4000/api/v1/movies${page ? `?page=${page}` : ``}${
        limit ? `&limit=${limit}` : ``
      }`,
    })
      .then((res) => {
        //ketika sukses, dispatch sucess
        dispatch(GetMovieSucess(res.data.data));
        // dispatch(GetMoviesSucess(res.data.data.results)) //trigger / dispatch
        //res.data.data.results, mengkorbankan, data lain kayak totalpage, totalRow gabisa ngambil//v1 (BAD)
        // if(res.data.message === "EMPTY") {
        //   dispatch(GetMoviesSucess(res.data.message))
        // }
      })
      .catch((err) => {
        dispatch(GetMovieError(err));
      });
  };
};

// import axios from 'axios'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../../../redux/actions/Movie";

function Post2() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMovie({ page: 1, limit: 10 })); // change zero object
  }, []);

  const data = useSelector((state) => state.movie);
  console.log(data.data.results, "test data");

  return (
    <div className="now-showing">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <p className="text-nowshowing">Now Showing</p>
          </div>
          <div className="col-6 text-end">
            <Link to={"/sign-up"} className="fw-bolder text-decoration-none">
              view all
            </Link>
          </div>
        </div>
      </div>
      <div className="cards-movie">
        {data.data.results.map((movie, index) => {
          return (
            <div className="card-movie" key={index}>
              <img
                className="card-movie-list"
                //insatll. env
                src={`${process.env.REACT_APP_NOWSHOWING}/${movie.image}`}
                alt={movie.title}
                title={movie.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post2;

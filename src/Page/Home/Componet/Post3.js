import React, { useEffect } from "react";
import blackwidow from "../../../img/black-widow.png";
import witches from "../../../img/the witches.png";
import tennet from "../../../img/Tenet.png";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../../../redux/actions/Movie";

function Post3() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMovie({ page: 1, limit: 6 })); // change zero object
  }, []);

  const data = useSelector((state) => state.movie);
  console.log(data.data.results, "test data");
  return (
    <section className="upcoming-movies">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Upcoming Movies</h2>
          </div>
          <div className="col d-flex justify-content-end">
            <Link to="/sign-up">view all</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <form className="month-movies">
          <label>
            <input type="radio" name="month" value="september" />
            <div className="month">September</div>
          </label>
          <label>
            <input type="radio" name="month" value="october" />
            <div className="month">October</div>
          </label>
          <label>
            <input type="radio" name="month" value="november" />
            <div className="month">November</div>
          </label>
          <label>
            <input type="radio" name="month" value="december" />
            <div className="month">December</div>
          </label>
          <label>
            <input type="radio" name="month" value="january" />
            <div className="month">January</div>
          </label>
          <label>
            <input type="radio" name="month" value="februari" />
            <div className="month">Februari</div>
          </label>
          <label>
            <input type="radio" name="month" value="march" />
            <div className="month">March</div>
          </label>
          <label>
            <input type="radio" name="month" value="april" />
            <div className="month">April</div>
          </label>
          <label>
            <input type="radio" name="month" value="may" />
            <div className="month">May</div>
          </label>
          <label>
            <input type="radio" name="month" value="june" />
            <div className="month">June</div>
          </label>
          <label>
            <input type="radio" name="month" value="july" />
            <div className="month">July</div>
          </label>
        </form>
<div className="movies-upcoming" >
              
        {data.data.results.map((movie, index) => {
          return (
            <div className="card-movies-upcoming" >
                <div className="card-movie" key={index}>
                  <img
                    className="card-movie-listt"
                    src={`${process.env.REACT_APP_NOWSHOWING}/${movie.image}`}
                  />
                  <h1>{movie.title}</h1>
                  <p>{movie.genre}</p>
                  <a href="detail" className="btn-details" style={{alignContent:'center'}}>
                    Details
                  </a>
                </div>
              </div>
          );
        })}

            </div>
        {/* <div className="card-movies-upcoming">
              <img src={witches} alt="" />
              <h1>The Witches</h1>
              <p>Adventure, Comedy, Family</p>
              <a href="details.html" className="btn-details">Details</a>
            </div>
            <div className="card-movies-upcoming">
              <img src={tennet} alt="" />
              <h1>Tenet</h1>
              <p>Acion, Sci-FI</p>
              <a href="details.html" className="btn-details">Details</a>
            </div>
            <div className="card-movies-upcoming">
              <img src={blackwidow} alt="" />
              <h1>Black Widow</h1>
              <p>Acion, Adventure, Sci-FI</p>
              <a href="details.html" className="btn-details">Details</a>
            </div>
            <div className="card-movies-upcoming">
              <img src={witches} alt="" />
              <h1>The Witches</h1>
              <p>Adventure, Comedy, Family</p>
              <a href="details.html" className="btn-details">Details</a>
            </div>
            <div className="card-movies-upcoming">
              <img src={tennet} alt="" />
              <h1>Tenet</h1>
              <p>Acion, Sci-FI</p>
              <a href="details.html" className="btn-details">Details</a>
            </div> */}
      </div>
    </section>
  );
}

export default Post3;

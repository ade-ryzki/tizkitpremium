import Navbar from "../../Component/Navbar"
import spiderman from "../../img/spiderman.png";
import hiflix from "../../img/logo-hiflix.svg";
import cine from "../../img/logo-cine-one.svg";
import ebv from "../../img/logo-edu.svg";
import Footer from "../../Component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Detail() {
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
    return(
        <>
            <Navbar />
            <main>
            <div>
                <section className="detail-movies mt-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card-movies d-flex align-items-center justify-content-center">
                            <img src={spiderman} alt="spiderman" />
                        </div>
                        </div>
                        <div className="col-md-8">
                        <div className="title-movies mt-5 mt-lg-0">
                            <h1>Spider-Man: Homecoming</h1>
                            <p>Adventure, Action, Sci-Fi</p>
                        </div>
                        <div className="description-movies">
                            <div className="row">
                            <div className="col-4">
                                <h6>Release date</h6>
                                <h3>June 28, 2017</h3>
                                <h6>Duration</h6>
                                <h3>2 hours 13 minutes</h3>
                            </div>
                            <div className="col-8">
                                <h6>Directed</h6>
                                <h3>Jon Watss</h3>
                                <h6>Casts</h6>
                                <h3>Tom Holland, Michael Keaton, Robert Downey Jr ....</h3>
                            </div>
                            </div>
                            <hr />
                            <h2>Synopsis</h2>
                            <p>
                            Thrilled by his experience with the Avengers, Peter returns
                            home, where he lives with his Aunt May, under the watchful eye
                            of his new mentor Tony Stark, Peter tries to fall back into
                            his normal daily routine - distracted by thoughts of proving
                            himself to be more than just your friendly neighborhood
                            Spider-Man - but when the Vulture emerges as a new villain,
                            everything that Peter holds most important will be threatened.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="container showtimes-tickets">
                    <h1>Showtimes and Tickets</h1>
                    <form className="form-showtimes mt-5 mb-5">
                    <div className="form-outline">
                        <img src="./assets/icon/ic_calendar.png" alt="" />
                        <input type="date" className="form-control unstyled" placeholder="21/07/20" />
                    </div>
                    <div className="form-outline">
                        <img src="./assets/icon/ic_location.png" alt="" />
                        <select className="form-select" id="exampleFormControlSelect1">
                        <option>Purwokerto</option>
                        <option>Jakarta</option>
                        <option>Karawang</option>
                        <option>Bandung</option>
                        <option>Bekasi</option>
                        </select>
                    </div>
                    </form>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={ebv} alt="ebv" />
                            </div>
                            <div className="col-7">
                            <h3>ebv.id</h3>
                            <p>Whatever street No. 12, South Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:30pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:30pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>07:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:30pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button  className="btn btn-book-now px-4">Book Now</button>
                            <button  className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={cine} alt="cine" />
                            </div>
                            <div className="col-7">
                            <h3>CineOne21</h3>
                            <p>Downcare street No. 21, East Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>06:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>08:00pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-book-now px-4">Book Now</button>
                            <button className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={hiflix} alt="hiflix" />
                            </div>
                            <div className="col-7">
                            <h3>hiflix Cinema</h3>
                            <p>Colonel street No. 2, East Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>06:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:00pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-book-now px-4">Book Now</button>
                            <button className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={ebv} alt="ebv" />
                            </div>
                            <div className="col-7">
                            <h3>ebv.id</h3>
                            <p>Whatever street No. 12, South Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>06:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:00pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-book-now px-4">Book Now</button>
                            <button className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={cine} alt="cine" />
                            </div>
                            <div className="col-7">
                            <h3>CineOne21</h3>
                            <p>Downcare street No. 21, East Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>06:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>08:00pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-book-now px-4">Book Now</button>
                            <button className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-showtimes">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                            <img src={hiflix} alt="hiflix" />
                            </div>
                            <div className="col-7">
                            <h3>hiflix Cinema</h3>
                            <p>Colonel street No. 2, East Purwokerto</p>
                            </div>
                        </div>
                        <hr />
                        <form className="form-price" action="booking">
                            <div className="showtimes mb-3">
                            <div className="row">
                                <div className="col">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:30am</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>10:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>12:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>02:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>04:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} disabled="true" /><span>06:00pm</span></label>
                                </div>
                                <div className="col-3">
                                <label><input type="radio" name="showtimes" defaultValue={1} /><span>08:00pm</span></label>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                            <h6>Price</h6>
                            <h3>$10.00/seat</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-book-now px-4">Book Now</button>
                            <button className="btn btn-add-cart px-4">Add to cart</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <h5>
                    <a href="#">View More</a>
                    </h5>
                </section>
            </div>
            </main>
            <Footer/>
        </>
        
    )
}

export default Detail
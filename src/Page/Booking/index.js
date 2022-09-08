import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar"
import cine from "../../img/logo-cine-one.svg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Booking() {
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
                <section className="order-movie">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="movie-selected d-none d-md-block">
                            <h2>Movie Selected</h2>
                            <div className="card-movie-selected d-flex justify-content-between align-items-center">
                            <h3>Spider-Man: Homecoming</h3>
                            <a className="btn-change-movie px-3 py-2" href="/">Change movie</a>
                            </div>
                        </div>
                        <div className="choose-your-seat">
                            <form action="payment.html">
                            <h2>Choose Your Seat</h2>
                            <div className="card-seat">
                                <h5>Screen</h5>
                                <hr />
                                <table>
                                <tbody><tr>
                                    <td className="seats">A</td>
                                    <td>
                                        <input type="checkbox" defaultValue="A1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A2" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A3" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A6" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="A8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A9" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A12" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="A14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">B</td>
                                    <td>
                                        <input type="checkbox" defaultValue="B1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B2" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B3" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="B8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B9" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B12" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="B14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">C</td>
                                    <td>
                                        <input type="checkbox" defaultValue="C1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C2" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C3" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="C8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C9" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C12" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">D</td>
                                    <td>
                                        <input type="checkbox" defaultValue="D1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D2" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D3" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="D8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D9" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D12" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="D14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">E</td>
                                    <td>
                                        <input type="checkbox" defaultValue="E1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E2" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E3" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E4" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="E8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E9" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E12" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="E14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">F</td>
                                    <td>
                                        <input type="checkbox" defaultValue="F1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F2" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F3" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="F8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F9" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F12" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F13" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="F14" />
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="seats">G</td>
                                    <td>
                                        <input type="checkbox" defaultValue="G1" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G2" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G3" disabled />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G4" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G5" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="C6" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G7" />
                                    </td>
                                    <td className="seatGap" />
                                    <td>
                                        <input type="checkbox" defaultValue="G8" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G9" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G10" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G11" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G12" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G13" />
                                    </td>
                                    <td>
                                        <input type="checkbox" defaultValue="G14" />
                                    </td>
                                    </tr>
                                    <tr className="seats-number">
                                    <td />
                                    <td style={{height: '40px'}}>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td className="seatGap" />
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    </tr>
                                </tbody></table>
                                <div className="seating-key">
                                <h4>Seating key</h4>
                                <div className="row">
                                    <div className="d-sm-block d-md-none col-1">
                                    <i className="fa fa-arrow-down" aria-hidden="true" />
                                    </div>
                                    <div className="d-sm-block d-md-none col-5">
                                    <p>A - G</p>
                                    </div>
                                    <div className="d-sm-block d-md-none col-1">
                                    <i className="fa fa-arrow-right" aria-hidden="true" />
                                    </div>
                                    <div className="d-sm-block d-md-none col-5">
                                    <p>1 - 14</p>
                                    </div>
                                    <div className="col-md-1 col-1">
                                    <div className="available" />
                                    </div>
                                    <div className="col-md-2 col-5">
                                    <p>Available</p>
                                    </div>
                                    <div className="col-md-1 col-1">
                                    <div className="selected" />
                                    </div>
                                    <div className="col-md-2 col-5">
                                    <p>Selected</p>
                                    </div>
                                    <div className="col-md-1 col-1">
                                    <div className="sold" />
                                    </div>
                                    <div className="col-md-2 col-5">
                                    <p>Sold</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card-choosed d-md-none d-sm-block">
                                <h6>Choosed</h6>
                                <h5>C4, C5, C6</h5>
                            </div>
                            <div className="card-choosed-seat d-md-none d-sm-block">
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                </select>
                                </div>
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                            </div>
                            <div className="card-choosed-seat d-md-none d-sm-block">
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                </select>
                                </div>
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                            </div>
                            <div className="card-choosed-seat d-md-none d-sm-block">
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                </select>
                                </div>
                                <div className="form-outline">
                                <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                            </div>
                            <button className="btn btn-new-seat d-md-none d-sm-block">
                                Add new seat
                            </button>
                            <div className="row mt-4">
                                <div className="col d-none d-md-block">
                                <a href="/" className="btn btn-your-movie py-2">
                                    Change your movie
                                </a>
                                </div>
                                <div className="col mb-5 text-end">
                                <Link to='/payment'>
                                <button className="btn btn-checkout py-2">
                                    Checkout now
                                </button>
                                </Link>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                        <div className="order-info">
                            <h2>Order Info</h2>
                            <div className="card-order-info">
                            <div className="cinema">
                                <img src={cine} alt="cine" />
                                <h2>CineOne21 Cinema</h2>
                            </div>
                            <div className="detail-order">
                                <div className="row">
                                <div className="col-5">
                                    <p>Movie selected</p>
                                </div>
                                <div className="col-7 text-end">
                                    <h6>Spider-Man: Homecoming</h6>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <p>Tuesday, 07 July 2020</p>
                                </div>
                                <div className="col text-end">
                                    <h6>02:00pm</h6>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <p>One ticket price</p>
                                </div>
                                <div className="col text-end">
                                    <h6>$10</h6>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                    <p>Seat choosed</p>
                                </div>
                                <div className="col text-end">
                                    <h6>C4, C5, C6</h6>
                                </div>
                                </div>
                            </div>
                            <hr />
                            <div className="total-payment">
                                <div className="row">
                                <div className="col">
                                    <h4>Total Payment</h4>
                                </div>
                                <div className="col text-end">
                                    <h3>$30</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
        
    )
}

export default Booking
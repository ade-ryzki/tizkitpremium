import Navbar from "../../Component/Navbar"
import gopay from "../../img/logo-gopay.svg";
import visa from "../../img/logos_visa.svg";
import gpay from "../../img/logos_google-pay.svg";
import paypal from "../../img/logos_paypal.svg";
import dana from "../../img/logo-dana.svg";
import bca from "../../img/bank-bca.svg";
import bri from "../../img/bank-bri.svg";
import ovo from "../../img/logo-ovo.svg";
import { Link } from 'react-router-dom';
import Footer from "../../Component/Footer";

function ListMovie() {
    return(
        <>
            <Navbar />
            <main>
                <section className="payment">
                    <div className="container">
                    <form action="ticket.html">
                        <div className="row">
                        <div className="col-md-8">
                            <div className="payment-info">
                            <h2 className="d-none d-md-block">Payment Info</h2>
                            <div className="card-payment-info">
                                <div className="d-none d-md-block">
                                <div className="row">
                                    <div className="col-4">
                                    <p>Date &amp; time</p>
                                    </div>
                                    <div className="col-8">
                                    <h6>Tuesday, 07 July 2020 at 02:00pm</h6>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                    <p>Movie title</p>
                                    </div>
                                    <div className="col-8">
                                    <h6>Spider-Man: Homecoming</h6>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                    <p>Cinema name</p>
                                    </div>
                                    <div className="col-8">
                                    <h6>CineOne21 Cinema</h6>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                    <p>Number of tickets</p>
                                    </div>
                                    <div className="col-8">
                                    <h6>3 pieces</h6>
                                    </div>
                                </div>
                                <hr />
                                </div>
                                <div className="row">
                                <div className="col-7">
                                    <p>Total payment</p>
                                </div>
                                <div className="col-5">
                                    <h5>$30,00</h5>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="payment-method">
                            <h2>Choose a Payment Method</h2>
                            <div className="card-payment-method">
                                <div className="row">
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={gpay} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={visa} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={gopay} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={paypal} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={dana} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={bca} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={bri} alt="" />
                                    </div>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label><input type="radio" name="payment" />
                                    <div className="icon-payment">
                                        <img src={ovo} alt="" />
                                    </div>
                                    </label>
                                </div>
                                </div>
                                <h6>
                                <span>or</span>
                                </h6>
                                <div className="pay-cash">
                                Pay via cash.
                                <a href="#">See how it work</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="personal-info">
                            <h2>Personal Info</h2>
                            <div className="card-personal-info">
                                <div className="mb-3 form-input">
                                <label htmlFor="exampleInputFullName1" className="form-label">Full Name</label>
                                <input type="text" className="form-control py-3 px-3" id="exampleInputFullName1" placeholder="Write your Full Name" defaultValue="Ade Ryzki Aprinata" />
                                </div>
                                <div className="mb-3 form-input">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control py-3 px-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" defaultValue="ade.ryzki@gmail.com" />
                                </div>
                                <label htmlFor="validationCustomPhone" className="form-label">Phone Number</label>
                                <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent" id="inputGroupPrepend">+62</span>
                                <input type="text" className="form-control py-3 px-3" aria-describedby="inputGroupPrepend" defaultValue={81277411111} />
                                </div>
                                <div className="alert alert-warning" role="alert">
                                <i className="fa fa-exclamation-triangle" aria-hidden="true" />
                                Fill your data correctly.
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row mt-4">
                        <div className="col-md-8">
                            <div className="row">
                            <div className="col d-none d-md-block">
                                <Link to='/booking'>
                                <button className="btn btn-previous">Previous step</button>
                                </Link>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-pay">Pay your order</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
        
    )
}

export default ListMovie
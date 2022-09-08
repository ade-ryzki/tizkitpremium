import Navbar from "../../Component/Navbar"
import pp from "../../img/pp.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); //coment
    // const { data, error, loading } = useSelector((state) => state.movie); //coment
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
                <section className="profile">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card-info">
                            <div className="info d-flex justify-content-between">
                            <h6>Info</h6>
                            <i className="fa fa-ellipsis-h" aria-hidden="true" />
                            </div>
                            <div className="profile-info">
                            <img src={pp} alt="pp" />
                            <h3>Ade Ryzki Aprinata</h3>
                            <p>Moviegoers</p>
                            </div>
                            <hr />
                            <div className="loyalty-points">
                            <h6>Loyalty Points</h6>
                            <div className="card-loyalty-points">
                                <h5>Moviegoers <i className="fa fa-star" /></h5>
                                <h4>320 <span>points</span></h4>
                            </div>
                            <h4>180 points become a master</h4>
                            <div className="progress" style={{borderRadius: '8px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '80%', borderRadius: '8px'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8">
                        <div className="tab-bar">
                            <div className="tabs">
                            <ul>
                                <li data-tab-target="#accont" className="active tab">
                                Account Setting
                                </li>
                                <li data-tab-target="#order" className="tab">Order History</li>
                            </ul>
                            <hr />
                            </div>
                            <div className="tab-content">
                            <div id="accont" data-tab-content className="active">
                                <h3>Detail Information</h3>
                                <hr />
                                <form action>
                                <div className="row">
                                    <div className="col-12 col-md-6 form-input mb-3">
                                    <label htmlFor="exampleInputFirstName1" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName1" placeholder="Write your First Name" defaultValue="Ade" />
                                    </div>
                                    <div className="col-12 col-md-6 form-input mb-3">
                                    <label htmlFor="exampleInputLastName1" className="form-label">Last Name</label>
                                    <input type="LastName" className="form-control" id="exampleInputLastName1" placeholder="Write your Last Name" defaultValue="Ryzki Aprinata" />
                                    </div>
                                    <div className="col-12 col-md-6 form-input mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your email" defaultValue="ade.ryzki@gmail.com" />
                                    </div>
                                    <div className="col-12 col-md-6 form-input mb-3">
                                    <label htmlFor="validationCustomPhone" className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent" id="inputGroupPrepend">+62</span>
                                        <input type="text" className="form-control" aria-describedby="inputGroupPrepend" defaultValue={81277411111} />
                                    </div>
                                    </div>
                                </div>
                                <h3>Account and Privacy</h3>
                                <hr />
                                <div className="row">
                                    <div className="col-12 col-md-6 form-input mt-4">
                                    <label htmlFor="exampleInputNewPassword1" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="exampleInputNewPassword1" placeholder="Write your password" />
                                    </div>
                                    <div className="col-12 col-md-6 form-input mt-4">
                                    <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm your password" />
                                    </div>
                                </div>
                                <button className="btn btn-change py-2">
                                    Update Changes
                                </button>
                                </form>
                            </div>
                            <div id="order" data-tab-content>
                                <div className="order-history">
                                <div className="row">
                                    <div className="col-12 col-md-8 order-2 order-lg-1">
                                    <p>Tuesday, 07 July 2020 - 04:30pm</p>
                                    <h6>Spider-Man: Homecoming</h6>
                                    </div>
                                    <div className="col-12 col-md-4 order-1 order-lg-2">
                                    <img src="./assets/images/CineOne21.png" alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className="ticket-order">
                                    <a href="#" className="ticket active py-2">Ticket in active</a>
                                    <div className="dropdown d-none d-md-block">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Show Details
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                        </li>
                                        <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        </li>
                                        <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="order-history">
                                <div className="row">
                                    <div className="col-12 col-md-8 order-2 order-lg-1">
                                    <p>Monday, 14 June 2020 - 02:00pm</p>
                                    <h6>Avengers: End Game</h6>
                                    </div>
                                    <div className="col-12 col-md-4 order-1 order-lg-2">
                                    <img src="./assets/images/ebv_id.png" alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className="ticket-order">
                                    <a href="#" className="ticket py-2">Ticket used</a>
                                    <div className="dropdown d-none d-md-block">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Show Details
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                        </li>
                                        <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        </li>
                                        <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                    </div>
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

        </>
        
    )
}

export default Profile
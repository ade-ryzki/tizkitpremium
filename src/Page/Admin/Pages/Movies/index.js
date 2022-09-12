import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MetaTags from '../../Component/Metatags'
import { Sidebar } from '../../Component/Sidebar'
import Swal from 'sweetalert2'
import moment from 'moment'
import NavbarLogin from './../../../../Component/NavbarLogin'
import { useDispatch } from 'react-redux'

// import { GetMovie } from './../../../../redux/actions/Movie';
// import { Navbar } from '../../Component/NavbarAdmin'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetMovie } from '../../../../redux/actions/Movie'

export const MoviesAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetMovie({ page: 1, limit: 10 })); // change zero object
    }, []);
  
    const data = useSelector((state) => state.movie);
    // console.log(data.data.results, "test data");

    return (
    <>
        <MetaTags title="Tickitz - Movie Admin" />
        <NavbarLogin />
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <div className='card shadow'>
                                <div className='card-body d-flex justify-content-between'>
                                    <h3 className='fw-bold p-auto'>MOVIE</h3>
                                    <button className='btn btn-primary'>Add Movie</button> 
                                    {/* // INTEGRASI ADD (CRUD BACKEND/MOVIES ADD) */}
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12'>
                            <div className='card shadow admin-body'>
                                <div className='card-body'>
                                    <div className="search-box">
                                        <button className="btn-search"><i className="fas fa-search"></i></button>
                                        <input type="text" className="input-search" placeholder="Type to Search..." />
                                    </div>
                                    <div className='table-responsive'>
                                        <table className='table table-striped table-hover'>
                                            <thead>
                                                <tr>
                                                    <th scope='col'>#</th>
                                                    <th scope='col'>Title</th>
                                                    <th scope='col'>Genre</th>
                                                    <th scope='col'>Duration</th>
                                                    <th scope='col'>Release Date</th>
                                                    <th scope='col'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.loading ? <tr><td colSpan='6' className='text-center'>No data</td></tr> : !data.data.results ? <tr><td colSpan='6' className='text-center'>Empty Data</td></tr> : data.data.results.map((movie, index) => {
                                                    return (<tr key={index}>
                                                        <th scope='row'>{index + 1}</th>
                                                        <td>{movie.title}</td>
                                                        <td>{movie.genre}</td>
                                                        <td>{movie.duration}</td>
                                                        <td>{movie.release_date}</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-primary mx-2'><i className='fa fa-pen-to-square'> </i> </button>
                                                                {/* // INTEGRASI ADD (CRUD BACKEND/MOVIES ADD) */}
                                                                <button className='btn btn-danger'><i className='fa fa-trash'> </i></button>
                                                                {/* // INTEGRASI DELETE (CRUD BACKEND/MOVIES DELETE) */}
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)

}


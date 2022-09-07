import React from 'react'
import MetaTags from '../../Component/Metatags'
// import { Navbar } from '../../Component/NavbarAdmin'
import NavbarLogin from './../../../../Component/NavbarLogin';

export const CinemaAdmin = () => {
    return (<>
        <MetaTags title="Tickitz - Dashboard Admin" />
        <body id="page-top">
            <div id="wrapper">
                <NavbarLogin />
            </div>
        </body>
    </>)
}

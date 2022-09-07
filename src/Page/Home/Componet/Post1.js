import React from "react"
import spiderMan from "../../../img/spiderman-header.png"
import lionKing from "../../../img/lion-header.png"
import blackWidow from "../../../img/header2.png"

function Post1 () {
    return (
        <>
        <div className="container">
            <div className="row querydevice">
                <div className="col-md-6">
                    <p className="text-banner">Nearest Cinema, Newest Movie,<br /> Find out now!</p>
                </div>
                <div className="col-md-6">
                    <div className="row banner-mobile">
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-1 " src={spiderMan} alt="spiderman" />
                        </div>
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-2 " src={lionKing} alt="lionKing" />
                        </div>
                        <div className="col-4 text-center col-banner">
                            <img className="img-banner-all img-b-3" src={blackWidow} alt="blackWidow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default Post1
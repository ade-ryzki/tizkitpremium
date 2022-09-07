import {Link} from "react-router-dom"
import tickitz from "../img/Tickitz.svg"
import human from "../img/profile-pitcure-sm.png"



function NavbarLogin() {
    return(
        <>
        <nav className="navbar navbar-desktop navbar-expand-lg bg-white">
        <div className="container-fluid">
            <Link to="/">
                <div className="navbar-brand" >
                    <img src={tickitz} alt="logo-tickitz" />
                </div>
            </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link active bold" >Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list-movie">
                <div className="nav-link active bold" >List movie</div>
              </Link>
            </li>
            </ul>
          </div>
          <Link to="/">
          <img src = {human} alt='human'/>
          </Link>
        </div>
      </nav>

      <nav class="navbar nav-phone navbar-expand-lg bg-white p-2">
        <div class="container-fluid">
          <div class="navbar-brand" href="#">
            <img src={tickitz} alt="logo-tickitz" />
          </div>
          <div class="hamburger-button d-flex flex-column align-items-end" id="navbarNav">
            <div class="line mb-1">
            </div>
            <div class="line-2 mb-1">
            </div>
            <div class="line"></div>
          </div>
        </div>
      </nav>
        </>
        
        
        
    )
}

export default NavbarLogin
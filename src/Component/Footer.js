import tickitz from "../img/logo-tickitz2.svg"
import IG from "../img/instagram.svg"
import FB from "../img/facebook.svg"
import TW from "../img/twitter.svg"
import YT from "../img/youtube.svg"
import EDU from "../img/logo-edu.svg"
import CINEONE from "../img/logo-cine-one.svg"
import HIFLIX from "../img/logo-hiflix.svg"

function Footer() {
    return(
        <footer className="container-fluid">
        <div class="row mt-5 mx-5 p-5 justify-content-center">
          <div class="col-lg-3 logo me-5">
            <div class="container d-flex flex-column ">
              <img class= "mb-4" src={tickitz} alt='tickitz'/>
              <p class="font-s">Stop waiting in line. Buy tickets</p>
              <p class="font-s">conveniently, watch movies queitly</p>
            </div>
          </div>
          <div class="col-lg-2 explore me-5">
            <div class="container d-flex flex-column my-3">
              <div class="bold mb-3" href="#">Explore</div>
              <div href="#">Home</div>
              <div href="#">List Movie</div>
            </div>
          </div>
          <div class="col-lg-2 our-sponsor me-5 my-3">
            <div class="container d-flex flex-column">
              <div class="bold mb-3" href="#">Our Sponsor</div>
              <img class="mb-3" src={EDU} width="120px" height="45px" alt="movie" />
              <img class="mb-3" src={CINEONE} width="170px" height="26px"alt="movie" />
              <img class="mb-3" src={HIFLIX} width="80px" height="25px" alt="movie" />
            </div>
          </div>
          <div class="col-lg-2 follow-us me-5 mt-3">
            <div class="container d-flex flex-column">
              <div class="bold mb-3" href="#">Follow Us</div>
              <div class="social-medial mb-2">
                <img class="pe-2" src={FB} alt="facebook" />
                <div class="font-s" href="#">tickitz cinema.id</div>
              </div>
              <div class="social-medial mb-2">
                <img src={IG}  alt="" />
                <div class="font-s" href="#">tickitz.id</div>
              </div>
              <div class="social-medial mb-2">
                <img src={TW} alt="" />
                <div class="font-s" href="#">tickitz.id</div>
              </div>
              <div class="social-medial mb-2">
                <img src={YT} alt="" />
                <div class="font-s" href="#">tickitz cinema.id</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center">
          <p class="font-s">2020 tickitz. All right preserved</p>
        </div>
            </footer>
    )
}

export default Footer
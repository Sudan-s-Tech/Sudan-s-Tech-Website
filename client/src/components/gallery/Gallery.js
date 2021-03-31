import React from "react";
import "./Gallery.css";
import gallImage from "../../assets/gall2.jpg";
import gallImage2 from "../../assets/gall1.jpg";
function Gallery() {
  return (
    <div className="gallery">
      <div className="container my-4 ">
        <h1>
          Our <span className="gallery__span">Gallery</span>
        </h1>
        <div className="row my-5 gallery__container">
          <div className="col-md-6 gallery__desc1">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner gallery__carausel">
                <div class="carousel-item active">
                  <img className='gallery__container-img'
                    class="d-block w-100"
                    src={gallImage}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item gallery__carausel">
                  <img className='gallery__container-img'
                    class="d-block w-100"
                    src={gallImage2}
                    alt="Second slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 gallery__desc">
            <h4 className='gallery__desc-h4'>
            Portal Inauguration by Deputy Commissioner Kathua
            </h4>
            <p>
            Deputy commissioner Sh. Op Bhagat  along with DIO NIC Sh. Sourabh Bhandari launched the online study portal of Sudan's Tech  in presence of Mohit Sharma and   Avinash koshal  ( Founders) on 16th March,2021 which is a collaborative effort of students  - Shashwat Mishra Anmol Reshi Shristi Jalan Abir Pal Yash Chauhan, Lucky Tolani .The aim of this portal is to make use of 21st-century technologies and learning methods to foster a fresh breed of highly skilled young people empowered with technical and social skills.There are number of features in portal such as 1-1 interaction with Mentors , huge community Support , Live courses are also available , Opportunity to work on real world projects and many more . Aiming  to provide a Free Learning Resource to 10,000+ Students by our portal and Spread our Initiative as impactful as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

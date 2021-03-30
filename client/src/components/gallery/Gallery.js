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
          <div className="col-md-6">
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
            <h4 style={{ textAlign: "center", fontSize: "2rem" }}>
              Project-based, active learning
            </h4>
            <p>
              Learning‌ ‌through‌ ‌practice‌ ‌has‌ ‌always‌ ‌created‌ ‌more‌
              ‌impact‌ ‌than‌ ‌theoretical‌ ‌ Knowledge.‌ ‌We‌ ‌Provide‌
              ‌hands-on‌ ‌experience‌ ‌on‌ ‌real‌ ‌world‌ ‌projects‌ ‌which‌
              ‌lead‌ ‌to‌ ‌ mastering‌ ‌the‌ ‌skills‌ ‌required.‌Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Vitae obcaecati id,
              tempora animi nulla dignissimos iusto, quibusdam tenetur, nisi
              quidem minima! Delectus eveniet ratione quis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import React from "react";
import "./CampusLeader.css";
import Nav from "../Navbar/Navbar";
import { Button } from "@material-ui/core";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
function CampusLeader() {
  return (
    <div className="campusLeader">
      <Nav />
      <div className="campusLeader__hero">
        <h4>Become a campus leader</h4>
        <p>Join us in building a reliable and worthy community</p>
        <Button
          style={{
            backgroundColor: "#7289DA",
            color: "#fff",
          }}
          className="campus__btn"
          href='#contact'
        >
          Apply Now
        </Button>
      </div>
      <div className="campusLeader__info">
        <h4>What Does a Campus Leader Stand For?</h4>
        <div className="campus__infoContainer">
          <div className="campus__infoLeft">
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="thumbnail"
            />
          </div>
          <div className="campus__infoRight">
            <h5>Who actually is a campus leader?</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nostrum asperiores quisquam quibusdam quae! Dolore quos qui rerum,
              aperiam accusamus tenetur nesciunt, necessitatibus facere nihil
              pariatur consectetur! Blanditiis, cumque ex?
            </p>
            <h5>Here's what is the true spirit of campus leader:</h5>
            <ul>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus. dolor sit amet consectetur adipisicing elit.
                Por
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
              <li>
                <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, natus.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="campus__benifits">
        <h4>perks and benifits</h4>
        <div className="campus__cards">
          <div className="campus__card">
            <div className="campus__cardTop">
              <CardGiftcardIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              Sudans tech VIP Swags and an opportunity to get special editions.
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <CardGiftcardIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              Sudans tech VIP Swags and an opportunity to get special editions.
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <CardGiftcardIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              Sudans tech VIP Swags and an opportunity to get special editions.
            </div>
          </div>
          <div className="campus__card">
            <div className="campus__cardTop">
              <CardGiftcardIcon className="campus__icon" />
            </div>
            <div className="campus__cardBottom">
              Sudans tech VIP Swags and an opportunity to get special editions.
            </div>
          </div>
        </div>
      </div>
      <div className="campus__contact" id='contact'>
        <h4>Apply Now</h4>
        <div className="contact__container">
          <div className="contactContainer__left">
            <div className="contactContainer__left-info">
              <h4>Selection Information</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur magnam quis autem inventore laboriosam dicta dolorem
                error ea, suscipit nobis ut, similique velit vitae explicabo.
              </p>
            </div>
          </div>
          <form>
            <div className="form__first">
              <div className="form__first-group">
                <label>Name </label>
                <input
                  name="name"
                  type="text"
                />
              </div>
              <div className="form__first-group">
                <label>E-mail </label>
                <input
                   name="email"
                   type="email"
                />
              </div>
            </div>
            <div className="form__first">
            <div className="form__first-group">
                <label>Phone-No </label>
                <input
                  name="phone"
                  type="number"
                />
              </div>
              <div className="form__first-group">
                <label>College-Name </label>
                <input
                  name="college"
                  type="text"
                />
              </div>
            </div>
            <div className="form__first">
              <div className="form__first-group">
                <label>Course & Year </label>
                <input
                  name="course"
                  type="text"
                />
              </div>
              <div className="form__first-group">
                <label>LinkedIn-URL </label>
                <input
                  name="linkedin"
                  type="url"
                />
              </div>
            </div>
           
            <button type="submit" className="form__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CampusLeader;

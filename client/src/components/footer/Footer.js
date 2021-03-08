import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Discord() {
  return (
    <div className="footer-div">
      <div className="footer__container">
        <div className="footerContainer__left">
          <img className="footer__logo" src={Logo} alt=" company logo" />
        </div>
      <div className="footerContainer__right">
        <div className="footerContainer__right1">
          <h5>Contact us </h5>
          <p>
            <span>General Querry- </span>hello@Sudan'sTech.com
          </p>
          <p>
            <span>Sponsorship Querry- </span>sponsor@Sudan'sTech.com
          </p>
        </div>
        <div className="footerContainer__right2">
          <h5>Quick links </h5>
          <ul className='footer__links'>
            <li>
              <Link to="/events">Event</Link>
            </li>
            <li>
              <Link to="/trainings">Training</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/sponsors">Sponsor</Link>
            </li>
            <li className='footer__register'>
              <Link  to="/signin">Register</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <hr/>
      <div className="footer__bottom">
       <div className="footerBottom__copywrite">
           <h5>Copyright &copy; 2021 All Rights Reserved By Sudan's Tech </h5>
       </div>
       <div className="footerBottom__icons">
      <span> <InstagramIcon style={{color:'red'}} className='footer__icon' /></span>
      <span> <LinkedInIcon style={{color:'blue'}} className='footer__icon'/></span>
      <span> <FacebookIcon style={{color:'blue'}} className='footer__icon'/></span>
       <span> <TwitterIcon style={{color:'blue'}} className='footer__icon'/></span>
       </div>
      </div>
    </div>
  );
}

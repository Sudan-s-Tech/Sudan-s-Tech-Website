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
    <a href="https://www.instagram.com/sudans_tech/"> <span> <InstagramIcon style={{color:'red'}} className='footer__icon' /></span></a> 
     <a href="https://www.linkedin.com/company/sudan-s-tech"> <span> <LinkedInIcon style={{color:'#0e76a8'}} className='footer__icon'/></span></a> 
     <a href="https://www.facebook.com/Sudans-Tech-102013144941387/"> <span> <FacebookIcon style={{color:'#0F92F3'}} className='footer__icon'/></span></a> 
     <a href="https://twitter.com/SudansTech1?s=09">  <span> <TwitterIcon style={{color:'#00acee'}} className='footer__icon'/></span></a> 
       </div>
      </div>
    </div>
  );
}

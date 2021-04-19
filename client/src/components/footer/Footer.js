import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube"
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
            <span>General Querry- </span><a href="mailto:support@sudans.tech">support@sudans.tech</a>
          </p>
          <p>
            <span>Sponsorship Querry- </span><a href="mailto:contact@sudans.tech">contact@sudans.tech</a>
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
           <div className="footerBottom__policies">
             <a href="https://www.notion.so/Pricing-Policy-Refund-Policy-334875c77c11431abd1f9b1c6889b385">Privacy Policy & Refund Policy</a>
             <span>|</span>
             <a href="https://www.notion.so/Privacy-Policy-for-Sudans-Technocrats-Foundation-7fc808e65f594fb08e036d08b692f60b">Privacy Policy</a>
             <span>|</span>
             <a href=" https://www.notion.so/TERMS-AND-CONDITIONS-25e164397c644688a7601addaf6f6640">Terms & Condition</a>
           </div>
       </div>
       <div className="footerBottom__icons">
    <a href="https://www.instagram.com/sudans_tech/"> <span> <InstagramIcon style={{color:'red',width:'25px'}} className='footer__icon' /></span></a> 
     <a href="https://www.linkedin.com/company/sudan-s-tech"> <span> <LinkedInIcon style={{color:'#0e76a8',width:'25px'}} className='footer__icon'/></span></a> 
     <a href="https://www.facebook.com/Sudans-Tech-102013144941387/"> <span> <FacebookIcon style={{color:'#0F92F3',width:'25px'}} className='footer__icon'/></span></a> 
     <a href="https://twitter.com/SudansTech1?s=09">  <span> <TwitterIcon style={{color:'#00acee',width:'25px'}} className='footer__icon'/></span></a> 
    <a href="https://youtube.com/channel/UCws_V5zg2Kk7DZt7MAeEoxA"> <span> <YouTubeIcon style={{color:'#FF0000',width:'25px'}} className='footer__icon' /></span></a> 
       </div>
      </div>
    </div>
  );
}

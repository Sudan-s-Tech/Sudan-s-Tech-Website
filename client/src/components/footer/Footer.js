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
        <div
            className="footer-div"
            style={{ padding: 30}}
        >
            <div className="footer-mainCircle1"></div>
            <div className="footer-mainCircle2"></div>
            <div className="container">
                <div className="row" align="center">
                    <div className="col-md-6">
                        <img className='footer__logo' src={Logo} style={{ width: "25%" }} alt="" />
                        <div style={{display:'flex',justifyContent:'center'}} className=" footer_icon my-3">
                                <div
                                    className="icons"
                                    style={{ color: "#fff" }}
                                >
                                    <span>
                                        <InstagramIcon />
                                    </span>
                                </div>
                                <div
                                    className="icons"
                                    style={{ color: "#fff" }}
                                >
                                    <LinkedInIcon />
                                </div>
                                <div
                                    className="icons"
                                    style={{ color: "#fff" }}
                                >
                                    <FacebookIcon />
                                </div>
                                <div
                                    className="icons"
                                    style={{ color: "#fff" }}
                                >
                                    <TwitterIcon />
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3" style={{  fontWeight:'bold' }}>
                        <ul style={{ textAlign: "center" }}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/events'>Event</Link>
                            </li>
                            <li>
                                <Link to='/trainings'>Trainings</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3" style={{  fontWeight:'bold' }}>
                        <ul style={{ textAlign: "center" }}>
                            <li>
                                <Link to='/contact'>Contact us</Link>
                            </li>
                            <li>
                                <Link to='/sponsors'>Sponsors</Link>
                            </li>
                            <li>
                                <Link to='/team'>Team</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-0">
                <div className="row">
                    <div className="col-sm-12 gradient-footer">
                        <h6 style={{ overflow: "hidden" }}>
                            {" "}
                            Built with <span> ❤️ </span> by your friends at
                            SudansTech
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Discord() {
    return (
        <div style={{ padding: 50, backgroundColor: "#212121" }}>
            <div className="container">
                <div className="row" align="center">
                    <div className="col-md-3">
                        <img src={Logo} style={{ width: "70%" }} />
                    </div>
                    <div className="col-md-3" style={{ marginTop: 20 }}>
                        <ul style={{ textAlign: "center" }}>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Event</Link>
                            </li>
                            <li>
                                <Link>Trainings</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3" style={{ marginTop: 20 }}>
                        <ul style={{ textAlign: "center" }}>
                            <li>
                                <Link>Contact us</Link>
                            </li>
                            <li>
                                <Link>Sponsors</Link>
                            </li>
                            <li>
                                <Link>Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="container">
                            {" "}
                            <div className="row d-flex justify-content-center my-5">
                                <div
                                    className="col-sm-3"
                                    style={{ color: "#E7497B" }}
                                >
                                    <span>
                                        <InstagramIcon />
                                    </span>
                                </div>
                                <div
                                    className="col-sm-3"
                                    style={{ color: "#0A66C2" }}
                                >
                                    <LinkedInIcon />
                                </div>
                                <div
                                    className="col-sm-3"
                                    style={{ color: "#1199F6" }}
                                >
                                    <FacebookIcon />
                                </div>
                                <div
                                    className="col-sm-3"
                                    style={{ color: "#1A91DA" }}
                                >
                                    <TwitterIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-0">
                <div className="row">
                    <div className="col-sm-12 gradient-footer">
                        <h5 style={{ overflow: "hidden" }}>
                            {" "}
                            Built with <span> ❤️ </span> by your friends at
                            SudansTech
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

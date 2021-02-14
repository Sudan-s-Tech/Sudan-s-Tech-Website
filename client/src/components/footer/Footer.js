import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Discord() {
    return (
        <div style={{ padding: 50, backgroundColor: "#212121" }}>
            <div className="container">
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-sm-1" style={{ color: "#E7497B" }}>
                        <span>
                            <InstagramIcon />
                        </span>
                    </div>
                    <div className="col-sm-1" style={{ color: "#0A66C2" }}>
                        <LinkedInIcon />
                    </div>
                    <div className="col-sm-1" style={{ color: "#1199F6" }}>
                        <FacebookIcon />
                    </div>
                    <div className="col-sm-1" style={{ color: "#1A91DA" }}>
                        <TwitterIcon />
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

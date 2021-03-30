import React from "react";
import Hero from "../Hero/Hero";
// import { makeStyles } from "@material-ui/core/styles";
import Pic from "../../assets/contact.svg";
import "./contact.css";
import Button from "@material-ui/core/Button";

export default function Events() {
    return (
        <div className="contact-us-div">
            <Hero
                subheading={"SudansTech"}
                heading={"We keep our doors open "}
                gradient={"24x7"}
                para={
                    "Have‌ ‌a‌ ‌query‌ ‌?‌ ‌Contact‌ ‌Us‌ ‌,‌ ‌We‌ ‌will‌ ‌try‌ ‌our‌ ‌best‌ ‌to‌ ‌solve‌ ‌your‌ ‌query‌ ‌with‌ ‌our‌ ‌best‌ ‌minds‌ ‌on‌ ‌it‌.‌"
                }
            />
            <div className="container">
                <div className="row" style={{ margin: "8% 0%" }}>
                    <div className="col-md-7">
                        <img src={Pic} alt='contactpic' style={{ width: "80%" }} />
                    </div>
                    <div className="col-md-5">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Write your message here..."></textarea>
                        <Button
                            // className="hero-btn"
                            variant="contained"
                            href="#contained-buttons"
                            style={{
                                backgroundColor: "#7289DA",
                                color: "white",
                                marginTop: "2%",
                                borderRadius: "20px",
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

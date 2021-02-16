import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Wave from "../../assets/wave-d.svg";
import Wave2 from "../../assets/wave-u.svg";
import Learn from "../../assets/learn.svg";
import Time from "../../assets/time.svg";
import Job from "../../assets/job.svg";
import Help from "../../assets/24-7.svg";
import "./features.css";
export default function Features() {
    return (
        <div className="features-div">
            <div className="container-fluid" style={{ marginTop: 200 }}>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "100px",
                    }}
                >
                    How‌ ‌we‌ <span> ‌Impact‌</span>.
                </h1>

                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={Learn}
                            style={{ width: "100%", padding: 50 }}
                        />
                    </div>
                    <div
                        className="col-md-6"
                        align="center"
                        style={{ marginTop: 100, paddingRight: 80 }}
                    >
                        <h1 style={{ textAlign: "left" }}>
                            Project-based, active learning
                        </h1>
                        <p style={{ textAlign: "left" }}>
                            Learn by doing with real-world projects and other
                            hands-on exercises that lead to real skills mastery.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <img src={Wave} />
            </div>

            <div className="container-fluid dark-wave">
                <div className="row">
                    <div className="col-md-6" style={{ padding: 50 }}>
                        <h1 style={{ textAlign: "left" }}>
                            Learn on your schedule
                        </h1>
                        <p style={{ textAlign: "left" }}>
                            Self-paced learning - whenever and wherever you
                            want. Graduate while learning part-time for 10
                            hrs/week.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={Time} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img src={Wave2} />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Job} style={{ width: "100%", padding: 50 }} />
                    </div>
                    <div className="col-md-6" style={{ marginTop: 100 }}>
                        <h1 style={{ textAlign: "left" }}>
                            Get real employable skills
                        </h1>
                        <p style={{ textAlign: "left" }}>
                            Our quality curriculum is designed with top-tier
                            industry partners, not academics, so you learn the
                            high-impact skills that top companies want.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img src={Wave} />
            </div>
            <div className="container-fluid dark-wave">
                <div className="row">
                    <div className="col-md-6" style={{ padding: 50 }}>
                        <h1 style={{ textAlign: "left" }}>
                            The help you need, when you need it
                        </h1>
                        <p style={{ textAlign: "left" }}>
                            Reach out to our mentors 24/7 and have your coding
                            questions answered quickly so you can keep learning.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={Help} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <img src={Wave2} />
            </div>
        </div>
    );
}

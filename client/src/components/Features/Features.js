import React from "react";
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
                    }}
                >
                    How‌ ‌we‌ <span> ‌Impact‌</span>.
                </h1>

                <div className="row">
                    <div className="col-md-6">
                        <img
                            alt=""
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
                        <p style={{ textAlign: "left" ,paddingRight:'40px'}}>
                            Learning‌ ‌through‌ ‌practice‌ ‌has‌ ‌always‌
                            ‌created‌ ‌more‌ ‌impact‌ ‌than‌ ‌theoretical‌ ‌
                            Knowledge.‌ ‌We‌ ‌Provide‌ ‌hands-on‌ ‌experience‌
                            ‌on‌ ‌real‌ ‌world‌ ‌projects‌ ‌which‌ ‌lead‌ ‌to‌ ‌
                            mastering‌ ‌the‌ ‌skills‌ ‌required.‌
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <img alt="" src={Wave} />
            </div>

            <div className="container-fluid dark-wave">
                <div className="row">
                    <div className="col-md-6" style={{ padding: 50 }}>
                        <h1 style={{ textAlign: "left" }}>
                            Learn on your schedule
                        </h1>
                        <p style={{ textAlign: "left",paddingRight:'4rem' }}>
                            Are‌ ‌You‌ ‌not‌ ‌able‌ ‌to‌ ‌cope‌ ‌up‌ ‌with‌ the
                            ‌timelines‌ ‌?‌ ‌Don't‌ ‌worry‌ ‌we‌ ‌understand‌
                            ‌your‌ ‌problem‌ ‌ .Our‌ ‌courses‌ ‌are‌ ‌self‌
                            ‌paced‌ ‌courses‌ ‌which‌ ‌you‌ ‌can‌ ‌view‌ ‌at‌
                            ‌anytime‌ ‌and‌ ‌anywhere‌ ‌at‌ ‌ your‌ ‌comfort‌
                            ‌.‌
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img alt="" src={Time} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img alt="" src={Wave2} />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            alt=""
                            src={Job}
                            style={{ width: "100%", padding: 50 }}
                        />
                    </div>
                    <div className="col-md-6" style={{ marginTop: 100 }}>
                        <h1 style={{ textAlign: "left" }}>
                            Get real employable skills
                        </h1>
                        <p style={{ textAlign: "left",paddingRight:'20px' }}>
                            Skills‌ ‌are‌ ‌what‌ ‌really‌ ‌matters‌ ‌in‌ ‌the‌
                            ‌industry‌ ‌when‌ ‌it‌ ‌comes‌ ‌to‌ ‌work.‌ ‌Doing‌
                            ‌our ‌courses‌ ‌not‌ ‌only‌ ‌help‌ ‌you‌ ‌to‌
                            ‌master‌ ‌that‌ ‌skill‌ ‌but‌ ‌get‌ ‌real‌
                            ‌Industry‌ ‌ready‌ ‌and‌ ‌provide‌ ‌ more‌
                            ‌opportunity‌ ‌.‌
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img alt="" src={Wave} />
            </div>
            <div className="container-fluid dark-wave">
                <div className="row">
                    <div className="col-md-6" style={{ padding: 50 }}>
                        <h1 style={{ textAlign: "left" }}>
                            The help you need, when you need it
                        </h1>
                        <p style={{ textAlign: "left" }}>
                            Got‌ ‌Stuck‌ ‌in‌ ‌a‌ ‌Problem‌ ‌?‌ ‌Don't‌ ‌worry‌
                            ‌!‌ ‌We‌ ‌are‌ ‌having‌ ‌a‌ ‌large‌ ‌Community‌
                            ‌support‌ ‌of‌ ‌Students,‌ ‌Industry‌ ‌Mentors‌
                            ‌for‌ ‌your‌ ‌support‌ ‌and‌ ‌helping‌ ‌you‌ ‌to‌
                            ‌solve‌ ‌your‌ ‌problem‌ quickly‌. ‌
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img alt="" src={Help} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <img alt="" src={Wave2} />
            </div>
        </div>
    );
}

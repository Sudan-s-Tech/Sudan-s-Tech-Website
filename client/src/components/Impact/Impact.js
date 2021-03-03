import React from "react";
import "./impact.css";
// import CountUp from 'react-countup';
export default function Impact() {
    return (
        <div className="impact-main">
            <div className="impact-mainCircle1"></div>
            <div className="impact-mainCircle2"></div>
            <div className="impact-mainCircle3"></div>
            <div className="container">
                <h1 style={{ textAlign: "center" }}>We are growing quickly</h1>
                <h6 style={{ color:'#536DFE', fontSize:'1.2rem',width:'350px',margin:'auto' }}>
                    We're dedicated to improving the experience and performance
                    of the developers.
                </h6>
                <div className="row stats impact_body" align="center">
                    <div className="col-md-4">
                        <h1> 1300+</h1>
                        <h5 style={{ textAlign: "left" ,color:'#536DFE' }}> 🧑‍🤝‍🧑 Participants</h5>
                    </div>
                    <div className="col-md-4">
                        <h1>2+</h1>
                        <h5 style={{ textAlign: "left" ,color:'#536DFE' }}>
                            🏆 International Hackathons
                        </h5>
                    </div>
                </div>
                <div className="row stats impact_body">
                    <div className="col-md-4">
                        <h1>30+</h1>
                        <h5 style={{ textAlign: "left" ,color:'#536DFE' }}>👨🏻‍🏫 Workshops</h5>
                    </div>
                    <div className="col-md-4">
                        <h1>600+</h1>
                        <h5 style={{ textAlign: "left" ,color:'#536DFE' }}>
                            {" "}
                            🧍‍♀️ Girls Impacted
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

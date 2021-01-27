import React from 'react'
import './impact.css'
export default function Impact() {
    return (
        <div className="impact-main">
            <div className="container">
                <h1 style={{textAlign:"center"}}>We are growing quickly</h1>
                    <h6>We're dedicated to improving the experience and performance of the developers.</h6>
                <div className="row" align="center">
                <div className="col-md-4">
                    <h1>1300+</h1>
                    <h5 style={{textAlign:"left"}}>Participants</h5>
                </div>
                <div className="col-md-4">
                    <h1>1300+</h1>
                    <h5 style={{textAlign:"left"}}>Discord Members</h5>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <h1>30+</h1>
                    <h5 style={{textAlign:"left"}}>Workshops</h5>
                </div>
                <div className="col-md-4">
                    <h1>600+</h1>
                    <h5 style={{textAlign:"left"}}>Girls Impacted</h5>
                </div>
                </div>
            </div>
        </div>
    )
}

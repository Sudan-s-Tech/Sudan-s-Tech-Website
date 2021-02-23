import React from "react";
import "./team.css";
import image from "../../assets/job.svg";
import Hero from "../Hero/Hero";
import Page from "react-page-loading";

export default function Team() {
    return (
        <div>
            <Hero
                btn={false}
                subheading={"SudansTech"}
                heading={"Meet our amazing "}
                gradient={"Team"}
                para={"Meet‌ ‌The‌ ‌Minds‌ ‌which‌ ‌started‌ ‌this‌ ‌Cause‌."}
            />
            <Page loader={"rotate-spin"} color={"#D864B4"} size={10}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={image} alt="" />
                                <figcaption>
                                    <h3>Apun Mishra</h3>
                                    <h5>Best web dev</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                </div>
            </Page>
        </div>
    );
}

import React from "react";
import "./team.css";
import image from "../../assets/job.svg";
import Hero from "../Hero/Hero";
export default function Team() {
    return (
        <div>
            <Hero
                btn={false}
                subheading={"SudansTech"}
                heading={"Meet our amazing "}
                gradient={"Team"}
                para={
                    "Sudan’s Technocrats(Tech) Foundation,J&K First Ever Tech Community which aims to focus on reducing the Technology gap between Industry and Students of India and is Registered section-8 company Rules under govt. Of India .Sudan's Technocrats(Tech) Foundation is a non-profit initiative aimed at making use of 21st-century technologies and learning methods to foster a fresh breed of highly skilled young people empowered with technical and social skills."
                }
            />

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="snip1584">
                            <img src={image} />
                            <figcaption>
                                <h3>Apun Mishra</h3>
                                <h5>Best web dev</h5>
                            </figcaption>
                            <a href="#"></a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

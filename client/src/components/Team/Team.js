import React from "react";
import "./team.css";
import mohit from "../../assets/mohit.jpg";
import Avinash from "../../assets/Avinash.jpg";
import Anmol from "../../assets/Anmol.jpg";
import Abir from "../../assets/Abir.png";
import merrin from "../../assets/merrin.jpg";
import Navya from "../../assets/Navya.jpg";
// import pankaj from "../../assets/pankaj.JPG";
// import photo from "../../assets/photo.jpg";
import Rakshit from "../../assets/Rakshit.jpg";
import reeti from "../../assets/reeti.jpg";
import shrishti from "../../assets/shrishti.jpg";
import sreeja from "../../assets/sreeja.jpg";
import Yash from "../../assets/Yash.jpg";
// import image from "../../assets/job.svg"
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
                <div className="container ">
                        <h2 className='Team__head'>Our <span>Core Team</span></h2>
                    <div className="row team__people ">
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={Avinash} alt="" />
                                <figcaption>
                                    <h3>Avinash Koshal</h3>
                                    <h5>Co Founder</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={mohit} alt="" />
                                <figcaption>
                                    <h3>Mohit Sharma</h3>
                                    <h5>Founder </h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={Anmol} alt="" />
                                <figcaption>
                                    <h3>Anmol Reshi</h3>
                                    <h5>Managing Director</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                    <h2 className='Team__head'>Our Lead <span>Web Team</span></h2>
                    <div className="row team__people">
                        <div className="col-md-3">
                            {/*<figure className="snip1584">
                                <img src={Abir} alt="" />  
                                <figcaption>
                                    <h3>Abir Pal</h3>
                                    <h5>Web Team Lead</h5> 
                                </figcaption>
                                <a href="#"></a> 
                            </figure>*/}
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFL-qyEkNLQ2g/profile-displayphoto-shrink_800_800/0/1607253962475?e=1620864000&v=beta&t=0c4E_gpJMSK65ZsBcxAwu4jKmxn4Uq_1a4oxY9vViY4' alt="" />
                                <figcaption>
                                    <h3>Shashwat Mishra</h3>
                                    <h5>Web Team Lead</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                    <h2 className='Team__head'>Our <span>Graphics Team</span></h2>
                    <div className="row team__people">
                    <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={shrishti} alt="" />
                                <figcaption>
                                    <h3>Shrishti Jalan</h3>
                                    <h5>Graphics Specialist</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={sreeja} alt="" />
                                <figcaption>
                                    <h3>Ravula Sreeja</h3>
                                    <h5>Graphics Specialist</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={reeti} alt="" />
                                <figcaption>
                                    <h3>Reeti Jha</h3>
                                    <h5>Content Specialist</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                    <h2 className='Team__head'>Our <span>Community Managers</span></h2>
                    <div className="row team__people">
                    <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={Rakshit} alt="" />
                                <figcaption>
                                    <h3>Rakshit Ramesh</h3>
                                    <h5>Community Manager</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>           
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={Navya} alt="" />
                                <figcaption>
                                    <h3>Navya Jyoti</h3>
                                    <h5>Community Manager</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEqTQplP17jJg/profile-displayphoto-shrink_800_800/0/1596538196854?e=1620864000&v=beta&t=bFKqP7MExdlMVuIX4QIbj-YjjQhABTQJkRQWlphivh0' alt="" />
                                <figcaption>
                                    <h3>Sandeep Singh</h3>
                                    <h5>Community Manager</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                    </div>
                    <h2 className='Team__head'>Our <span>Interns</span></h2>
                    <div className="row team__people">
                    <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={Yash} alt="" />
                                <figcaption>
                                    <h3>Yash Chauhan</h3>
                                    <h5>Web Engineering</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src={merrin} alt="" />
                                <figcaption>
                                    <h3>Merrin Chacko</h3>
                                    <h5>Web Engineering</h5>
                                </figcaption>
                                {/* <a href="#"></a> */}
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure className="snip1584">
                                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEOgoZ-H3iysw/profile-displayphoto-shrink_800_800/0/1613324256459?e=1620864000&v=beta&t=Hju9OURzC09Od7OnPtUWS4jfHQlEyr9BesXxkMXSDpo' alt="" />
                                <figcaption>
                                    <h3>Lucky Tolani</h3>
                                    <h5>Web Engineering</h5>
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

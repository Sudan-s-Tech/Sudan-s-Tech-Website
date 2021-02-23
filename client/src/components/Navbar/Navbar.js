import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <a class="navbar-brand" href="#">
                        <img
                            src={logo}
                            style={{ width: "50px", paddingRight: 5 }}
                        />
                        <b>Sudan's Tech</b>
                    </a>
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/">
                            <li>
                                <a class="nav-link active" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/Events">
                            <li>
                                <a class="nav-link" href="#">
                                    Events
                                </a>
                            </li>
                        </Link>
                        <Link to="/trainings">
                            <li>
                                <a class="nav-link" href="#">
                                    Trainings
                                </a>
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li>
                                {" "}
                                <a class="nav-link" href="#">
                                    Contact us
                                </a>
                            </li>
                        </Link>
                        <Link to="/sponsors">
                            <li>
                                <a class="nav-link" href="#">
                                    Sponsors
                                </a>
                            </li>
                        </Link>
                        <Link to="/team">
                            <li>
                                <a class="nav-link" href="#">
                                    Team
                                </a>
                            </li>
                        </Link>
                        <Link to="/signin">
                            <li>
                                <a class="nav-link" href="#">
                                    Signin
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

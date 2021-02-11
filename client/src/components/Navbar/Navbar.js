import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
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
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse d-flex justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav">
                        <Link to="/">
                            <a class="nav-item nav-link active" href="#">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </Link>
                        <Link to="/Events">
                            <a class="nav-item nav-link" href="#">
                                Events
                            </a>
                        </Link>
                        <Link to="/trainings">
                            <a class="nav-item nav-link" href="#">
                                Trainings
                            </a>
                        </Link>
                        <Link to="/contact">
                            <a class="nav-item nav-link" href="#">
                                Contact us
                            </a>
                        </Link>
                        <Link to="/sponsors">
                            <a class="nav-item nav-link" href="#">
                                Sponsors
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

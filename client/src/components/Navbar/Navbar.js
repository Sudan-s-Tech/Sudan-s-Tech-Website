import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
export default function Navbar() {
  const[{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const data = localStorage.getItem("username");
    if (data) {
      dispatch({
        type: actionTypes.SET_USER,
        user: data,
      });
    }
  }, []);
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
                        <a target='_blank'  href='https://hackthemountain.tech/' className='popupContainer'>
                            <li>
                                <a class="nav-link popup" >
                                    HacktheMountain
                                </a>
                            </li>
                        </a>
                        <NavLink exact to="/" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </NavLink>
                        <NavLink exact to="/Events" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                    Events 
                                </a>
                            </li>
                        </NavLink>
                        <NavLink exact to="/trainings" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                    Trainings
                                </a>
                            </li>
                        </NavLink>
                        <NavLink exact to="/contact" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                   Contact us
                                </a>
                            </li>
                        </NavLink>
                        <NavLink exact to="/sponsors" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                Sponsors
                                </a>
                            </li>
                        </NavLink>
                        <NavLink exact to="/campusLeader" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                Campus Leader
                                </a>
                            </li>
                        </NavLink>
                        {/* <NavLink exact to="/team" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link active" href="#">
                                   Team
                                </a>
                            </li>
                        </NavLink> */}
                        <NavLink exact to="/signin" activeClassName='nav_active'>
                            <li>
                                <a class="nav-link" style={{color:'black'}} href="#">
                                    {user ? (
                                        'Dashboard'
                                    ):(
                                        'Sign in'
                                    )}
                                </a>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

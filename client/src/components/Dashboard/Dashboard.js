import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Dashboard.css";
import { Button } from "@material-ui/core";
import Dash from "../../assets/dashboard.svg";
import DashboardCard from "./DashboardCard";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

function Dashboard() {

 

  let history = useHistory();
  const [{ user,token}, dispatch] = useStateValue();
  useEffect(() => {
    const data = localStorage.getItem("username");
    const token = localStorage.getItem("tokens");
    if (data) {
      dispatch({
        type: actionTypes.SET_USER,
        user: data,
        token:token,
      });
    }
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://sudan-tech-backend.herokuapp.com/users/me",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const signOut =() =>{
    axios({
      method: "post",
      url: "https://sudan-tech-backend.herokuapp.com/users/logout",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) =>{
      if(res.status === 200){
        history.push('/signin');
        localStorage.clear();
       dispatch({
         type: actionTypes.SET_USER,
         user: null,
         token: null,
         })
    }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  return (
    <>
    { !user ?( 
        <Redirect to='/signin' />
      )
      :(
    <div className="dashboard">  
      <div className="dashboard__header">
        <div className="dashboard__header-left">
          <Avatar
            alt={user ? user : 'abc'}
            src={ user}
            className="dashboard__header-leftAvatar"
          />
          <h5>{user ? user : "not"}</h5>
        </div>
        <div className="dashboard__header-right">
          <Button
            onClick={() => {
              history.push("/");
            }}
            variant="outlined"
            className="course__btn homeBtn"
            style={{
              marginRight: "1rem",
              border: " 2px solid #7289DA",
              color:'#7289DA'
            }}
          >
            Home
          </Button>
          <Button
            onClick={signOut}
            variant="contained"
            className="course__btn"
            style={{ backgroundColor: "#7289DA", color: "#fff",boxShadow:'none' }}
          >
            Sign Out
          </Button>
        </div>
      </div>
      <div className="dashboardBody">
        <div className="dashboardBody__header">
          <div className="dashboardBody__header-img">
            <img src={Dash} alt="image" />
          </div>
          <div className="dashboardBody__header-msg">
            <h4>
              Hello <span style={{ color: "#7289DA" }}> {user}</span>
            </h4>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="dashbordBody__courses">
          <h2>My Courses</h2>
          <div className="dashbordBody__courses-cards">
            <DashboardCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYKHbQOHW3Vev4Wt6EWMe2wFrB2pJRHVzuA&usqp=CAU"
              }
              title={"Cyber Security the life style"}
              subTitle={"Lets learn about cyber security"}
            />
            <DashboardCard
              image={
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt45dq0ZTou1p44yffI4F_3OPUuH4IhYQGoA&usqp=CAU"
              }
              title={"Web Development"}
              subTitle={"Lets learn about web development"}
            />
            <DashboardCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiREjHpsolL5RsjWAgCW4dLj1KqNa3gYwJw&usqp=CAU"
              }
              title={"Python Development"}
              subTitle={"Lets learn about Python with real world examples"}
            />
            <DashboardCard
              image={
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt45dq0ZTou1p44yffI4F_3OPUuH4IhYQGoA&usqp=CAU"
              }
              title={"Web Development"}
              subTitle={"Lets learn about web development"}
            />
          </div>
        </div>
        <div className="dashboard__mid">
          <div className="dashboardBody__progress">
            <h2>My Progress</h2>
            <div className="dashboardBody__progressBox">
              <div className="dashboardBody__progressBox-header">
                <h5>Courses</h5>
                <h5>Status</h5>
              </div>
              <div className="dashboardBody__progressBox-info">
                <p>Web Development</p>
                <p>Completed</p>
              </div>
              <div className="dashboardBody__progressBox-info">
                <p>Python Development</p>
                <p>in progress</p>
              </div>
              <div className="dashboardBody__progressBox-info">
                <p>Cyber Security</p>
                <p>in progress</p>
              </div>
              <div className="dashboardBody__progressBox-info">
                <p>Cyber Security</p>
                <p>in progress</p>
              </div>
            </div>
          </div>
          <div className="dashboard__announcements">
            <div className="dashboard__announcements-header">
              <h2>Announcements</h2>
            </div>
            <div className="dashboard__announcements-info">
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
}

export default Dashboard;

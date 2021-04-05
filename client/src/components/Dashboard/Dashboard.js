import React, { useEffect, useState } from "react";
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
const [course, setCourse] = useState([])
const[arr, setArr] = useState([])
  let history = useHistory();
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const data = localStorage.getItem("username");
    const token = localStorage.getItem("tokens");
    if (data) {
      dispatch({
        type: actionTypes.SET_USER,
        user: data,
        token: token,
      });
    }
  }, []);
  
  
  useEffect(async() => {
    axios({
      method: "get",
      url: "https://sudan-tech-backend.herokuapp.com/users/me",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res)
        if(res.data.coursereg.length > 0){
        setArr(res.data.coursereg)
        }
      })
      .catch((e) => {
      });
  }, []);
  useEffect(async() => {
    arr.map(item =>{
// console.log(item)
axios({
  method: "get",
  url:(`https://sudans-api.herokuapp.com/training/${item}`),
})
.then((res) => {
  // console.log(res)
  setCourse(oldarr =>{
    return [...oldarr, res.data]
  })
})
.catch((e) => {
  console.log(e);
});
})
}, [arr]);
  function signOut() {
    axios({
      method: "post",
    url: "https://sudan-tech-backend.herokuapp.com/users/logout",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    if (res.status === 200) {
      history.push("/signin");
      localStorage.clear();
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
        token: null,
      });
    }
  })
  .catch((e) => {
    // console.log(e);
  });
}

return (
  <>
      {!user ? (
        <Redirect to="/signin" />
      ) : (
        <div className="dashboard">
          <div className="dashboard__header">
            <div className="dashboard__header-left">
              <Avatar
                alt={user ? user : "abc"}
                src={user}
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
                  color: "#7289DA",
                }}
              >
                Home
              </Button>
              <Button
                onClick={signOut}
                variant="contained"
                className="course__btn"
                style={{
                  backgroundColor: "#7289DA",
                  color: "#fff",
                  boxShadow: "none",
                }}
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
                {   
               course && course.map((info) => {
                  return (
                    <>
                    <DashboardCard
                      image={info.imageurl}
                      title={info.title}
                      subTitle={info.description}
                    />
                    </>
                  );
                })
              }
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
                  {    
                course.map((info) => {
                  return (
                    <>
                   <div  onClick={()=>{
            history.push(`/register/${info.title}`)
          }} className='info__para' style={{display:'flex',justifyContent:'space-between',width:'100%',cursor:'pointer'}}><p>{info.title}</p> <span>Enrolled</span></div> 
                    </>
                  );
                })

              }

                  </div>
                </div>
              </div>
              <div className="dashboard__announcements">
                <div className="dashboard__announcements-header">
                  <h2>Announcements</h2>
                </div>
                <div className="dashboard__announcements-info">
                  <p>
                    Welcome to your admin dashboard.
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

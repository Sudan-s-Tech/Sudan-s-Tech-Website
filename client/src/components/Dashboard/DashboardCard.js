import { Avatar, Button } from "@material-ui/core";
import React from "react";
import {  useHistory } from "react-router-dom";
import "./DashboardCard.css";

function DashboardCard({ title, image, subTitle }) {
    let history = useHistory();
  return (
    <div className="dashBoardCard">
      <img src={image} alt="course image" className="dashBoardCard__img" />
      <div className="dashBoardCard__info">
        <Avatar className="dashBoardCard__avatar" alt={title} src={title} />
        <div className="dashboardCard__text">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        <div className="dashboardCard__btn">
          <Button
          onClick={()=>{
            history.push(`/register/${title}`)
          }}
            variant="contained"
            className="course__btn"
            style={{ backgroundColor: "blueviolet", color: "#fff",marginBottom:'0.5rem' }}
          >
            See the course
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;

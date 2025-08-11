/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./trendCard.css";

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      
      <img className="img-fluid" src={slide.previewImg}/>
      <a href="#">
        Add to calender <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
}

export default TrendCard;

import React, { useState } from "react";
import "./css/YoutuberCard.css";
import { Link } from "react-router-dom";

const YoutuberCard = ({ info, listName }) => {
  let display_score = "";
  if (listName === "SubscriberNum") {
    if (info.channel_score >= 4000000) display_score = "400만명 이상";
    else if (info.channel_score >= 3500000) display_score = "350만명 이상";
    else if (info.channel_score >= 3000000) display_score = "300만명 이상";
    else if (info.channel_score >= 2000000) display_score = "200만명 이상";
    else if (info.channel_score >= 1500000) display_score = "150만명 이상";
    else if (info.channel_score >= 1000000) display_score = "100만명 이상";
    else if (info.channel_score >= 900000) display_score = "90만명 이상";
    else if (info.channel_score >= 800000) display_score = "80만명 이상";
    else if (info.channel_score >= 700000) display_score = "70만명 이상";
    else if (info.channel_score >= 600000) display_score = "60만명 이상";
    else if (info.channel_score >= 500000) display_score = "50만명 이상";
    else if (info.channel_score >= 100000) display_score = "10만명 이상";
    else display_score = "1만명 이상";
  } else if (listName === "VideoNum") {
    if (info.channel_score >= 25000) display_score = "25,000개 이상";
    else if (info.channel_score >= 20000) display_score = "20,000개 이상";
    else if (info.channel_score >= 15000) display_score = "15,000개 이상";
    else if (info.channel_score >= 10000) display_score = "10,000개 이상";
    else if (info.channel_score >= 5000) display_score = "5,000개 이상";
    else if (info.channel_score >= 3000) display_score = "3,000개 이상";
    else if (info.channel_score >= 1000) display_score = "1,000개 이상";
    else display_score = "500개 이상";
  } else if (listName === "ViewNum") {
    if (info.channel_score >= 2000000000) display_score = "20억 뷰 이상";
    else if (info.channel_score >= 1500000000) display_score = "15억 뷰 이상";
    else if (info.channel_score >= 1000000000) display_score = "10억 뷰 이상";
    else if (info.channel_score >= 500000000) display_score = "5억 뷰 이상";
    else if (info.channel_score >= 100000000) display_score = "1억 뷰 이상";
    else display_score = "1만 뷰 이상";
  } else if (listName === "RecentUploadVideoNum") {
    display_score = info.channel_score.toString() + "개";
  } else if (listName === "SubscriberPerView") {
    if (info.channel_score >= 2000) display_score = "2000배 이상";
    else if (info.channel_score >= 1500) display_score = "1500배 이상";
    else if (info.channel_score >= 1000) display_score = "1000배 이상";
    else display_score = "500배 이상";
  } else if (listName === "LikePerView") {
    if (info.channel_score >= 0.1) display_score = "10% 이상";
    else if (info.channel_score >= 0.08) display_score = "8% 이상";
    else if (info.channel_score >= 0.06) display_score = "6% 이상";
    else if (info.channel_score >= 0.04) display_score = "4% 이상";
    else if (info.channel_score >= 0.02) display_score = "2% 이상";
    else display_score = "1% 이상";
  } else if (listName === "CommentNumMean") {
    if (info.channel_score >= 4000) display_score = "4000개 이상";
    else if (info.channel_score >= 3500) display_score = "3500개 이상";
    else if (info.channel_score >= 3000) display_score = "3000개 이상";
    else if (info.channel_score >= 2500) display_score = "2500개 이상";
    else if (info.channel_score >= 2000) display_score = "2000개 이상";
    else if (info.channel_score >= 1000) display_score = "1000개 이상";
    else display_score = "500개 이상";
  } else display_score = "YouReco AI 선정";
  return (
    <Link className="card-link" to={`/youtuber/${info.channel_id}`}>
      <div className="card-box">
        <div
          className="image-box"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${info.channel_banner})`,
          }}
        >
          <img
            src={`${info.channel_photo}`}
            alt="channelimage"
            width="90%"
            // height="90%"
            style={{ borderRadius: "100%", margin: "auto" }}
          />
        </div>
        <div className="text-box">
          <h3>{info.channel_title}</h3>
          <hr />
          <p>{display_score}</p>
        </div>
      </div>
    </Link>
  );
};

export default YoutuberCard;

// {info.channel_score
//   .toString()
//   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

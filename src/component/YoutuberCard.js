import React, { useState } from "react";
import "./css/YoutuberCard.css";
import { Link } from "react-router-dom";

const YoutuberCard = ({ info }) => {
  return (
    <Link className="card-link" to={`/youtuber/${info.channel_id}`}>
      <div className="card-box">
        <div className="image-box">
          <img
            src={`${info.channel_photo}`}
            alt="channelimage"
            width="90%"
            height="90%"
            style={{ borderRadius: "100%", marginTop: "10px" }}
          />
        </div>
        <div className="text-box">
          <h3>{info.channel_title}</h3>
          <hr />
          <p>
            SCORE :{" "}
            {info.channel_score
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default YoutuberCard;

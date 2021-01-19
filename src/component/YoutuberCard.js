import React, { useState } from "react";
import "./css/YoutuberCard.css";
import { Link } from "react-router-dom";

const YoutuberCard = ({ info }) => {
  return (
    <Link className="card-link" to={`/youtuber/${info.channel_id}`}>
      <div className="card-box">
        <div className="image-box">
          <img
            src={`data:image/png;base64, ${info.channel_photo}`}
            alt="channelimage"
            width="100%"
            height="100%"
          />
        </div>
        <div className="text-box">
          <h3>{info.channel_title}</h3>
          <hr />
          <p>구독자수 : {info.subscriber_num.value}</p>
        </div>
      </div>
    </Link>
  );
};

export default YoutuberCard;

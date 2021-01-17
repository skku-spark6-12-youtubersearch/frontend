import React, { useState } from "react";
import "./css/YoutuberCard.css";
import { Link } from "react-router-dom";

const YoutuberCard = ({ name }) => {
  return (
    <Link className="card-link" to={`/youtuber/${name}`}>
      <div className="card-box">
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default YoutuberCard;

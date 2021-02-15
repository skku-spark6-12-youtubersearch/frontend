import React from "react";
import "./css/TopBanner.css";
import { Link } from "react-router-dom";

const top_banner = () => {
  return (
    <div className="top-banner">
      <h2 className="site-logo">
        <Link className="home-link" to="/">
          YouReco!
        </Link>
      </h2>
      <div className="search-box">
        <input className="search-input" type="text" placeholder="" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default top_banner;

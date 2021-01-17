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
      <input
        className="search-input"
        type="text"
        placeholder="유튜버를 검색하세요"
      />
    </div>
  );
};

export default top_banner;

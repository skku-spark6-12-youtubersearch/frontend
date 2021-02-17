import React from "react";
import "./css/TopBanner.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const top_banner = () => {
  return (
    <div className="top-banner">
      <h2 className="site-logo">
        <Link className="home-link" to="/">
          YouReco!
        </Link>
      </h2>

      <SearchBar />
    </div>
  );
};

export default top_banner;

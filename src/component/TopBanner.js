import React from "react";
import "./css/TopBanner.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const top_banner = () => {
  const onClickMenu = (e) => {
    const menu = document.getElementsByClassName("side-bar-box")[0];
    menu.style.display = "block";
  };
  return (
    <div className="top-banner">
      <h2 className="site-logo">
        <span className="mobile-menu" onClick={onClickMenu}>
          <i className="fas fa-bars "></i>
        </span>
        <Link className="home-link" to="/">
          YouReco!
        </Link>
      </h2>

      <SearchBar />
    </div>
  );
};

export default top_banner;

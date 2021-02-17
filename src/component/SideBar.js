import React from "react";
import "./css/SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar-box">
      <div className="side-bar-menu">
        <i className="fas fa-bars fa-lg"></i>
        <p>menu</p>
      </div>
      <div className="side-bar-menu">
        <i className="far fa-user fa-lg"></i>
        <p>내정보</p>
      </div>
      <div className="side-bar-menu">
        <Link to="/">
          <i className="fas fa-home fa-lg"></i>
          <p>메인</p>
        </Link>
      </div>
      <div className="side-bar-menu">
        <Link to="/developers">
          <i className="fab fa-dev fa-lg"></i>
          <p>개발자들</p>
        </Link>
      </div>
      <div className="side-bar-menu">
        <Link to="/feedback">
          <i className="far fa-comments fa-lg"></i>
          <p>피드백</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import "./css/SideBar.css";

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
        <i className="fas fa-home fa-lg"></i>
        <p>메인</p>
      </div>
      <div className="side-bar-menu">
        <i className="fab fa-dev fa-lg"></i>
        <p>개발자들</p>
      </div>
      <div className="side-bar-menu">
        <i className="far fa-comments fa-lg"></i>
        <p>피드백</p>
      </div>
    </div>
  );
};

export default SideBar;

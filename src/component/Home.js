import React, { useState } from "react";
import "./css/Home.css";
import CategoryTab from "./CategoryTab";

const Home = () => {
  return (
    <div className="home-box">
      <div className="login-box">
        <h2>
          유튜버 큐레이션 서비스{" "}
          <span style={{ color: "#f73859" }}>YouReco!</span> 입니다
        </h2>
        {/* <button>새로운 추천 목록 불러오기</button> */}
      </div>
      <CategoryTab />
    </div>
  );
};

export default Home;

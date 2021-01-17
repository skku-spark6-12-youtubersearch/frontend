import React, { useState } from "react";
import "./css/Home.css";
import CategoryTab from "./CategoryTab";

const Home = () => {
  return (
    <div className="home-box">
      <div className="login-box">
        <h2>테스트 페이지</h2>
        <button>로그인</button>
      </div>
      <CategoryTab />
    </div>
  );
};

export default Home;

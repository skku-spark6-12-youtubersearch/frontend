import React, { useState } from "react";
import "./css/CategoryTab.css";
import FilterTab from "./FilterTab";

const category = ["게임", "음악", "요리", "브이로그", "엔터테인먼트"];

const CategoryTab = () => {
  const [categoryIdx, setCategoryIdx] = useState(0);
  const selectedStyle = {
    backgroundColor: "#23252b",
    color: "white",
  };
  const unselectedStyle = {
    backgroundColor: "white",
  };

  return (
    <>
      <div className="category-tab-box">
        <div className="category-text-box">
          <h2>카테고리 선택</h2>
          <div className="button-box">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <div className="category-select-box">
          {category.map((name, idx) => {
            return (
              <button
                onClick={() => {
                  setCategoryIdx(idx);
                }}
                key={idx}
                style={categoryIdx === idx ? selectedStyle : unselectedStyle}
                disabled={idx !== 0}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <FilterTab category={category[categoryIdx]} />
    </>
  );
};

export default CategoryTab;

import React, { useState } from "react";
import "./css/FilterTab.css";
import RecoList from "./RecoList";

const filter = [
  "남성",
  "여성",
  "리그 오브 레전드",
  "마인크래프트",
  "배틀그라운드",
  "아프리카TV",
  "트위치",
];

const FilterTab = ({ category }) => {
  const [filterTag, setFilterTag] = useState([]);

  // useEffect(() => {
  //   console.log(filterTag);
  // }, [filterTag]);

  const onFilterClick = (e) => {
    if (filterTag.includes(e.target.value)) {
      let current_tag = filterTag;
      current_tag.splice(current_tag.indexOf(e.target.value), 1);
      let new_tag = [...current_tag];
      setFilterTag(new_tag);
    } else {
      let current_tag = filterTag;
      current_tag.push(e.target.value);
      current_tag = new Set(current_tag);
      let new_tag = [...current_tag];
      setFilterTag(new_tag);
    }
  };

  const selectedStyle = {
    backgroundColor: " #EF3959",
    color: "white",
  };
  const unselectedStyle = {
    backgroundColor: "#E98899",
    color: "white",
  };

  return (
    <>
      <div className="filter-tab-box">
        <div>
          <h2>필터 선택</h2>
        </div>
        <div className="filter-select-box">
          {filter.map((tag, idx) => {
            return (
              <button
                value={filter[idx]}
                onClick={onFilterClick}
                key={idx}
                style={
                  filterTag.includes(filter[idx])
                    ? selectedStyle
                    : unselectedStyle
                }
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
      <RecoList category={category} filter={filterTag} />
    </>
  );
};

export default FilterTab;

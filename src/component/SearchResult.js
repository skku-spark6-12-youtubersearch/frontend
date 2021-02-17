import React from "react";
import { Link } from "react-router-dom";
import "./css/SearchResult.css";

const searchResult = ({ data }) => {
  return (
    <div>
      <Link className="search-link" to={`/youtuber/${data.id}`}>
        <img src={data.profile} width={"30"} height={"30"} alt={data.title} />

        <span>{data.title}</span>
      </Link>
    </div>
  );
};

export default searchResult;

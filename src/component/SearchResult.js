import React from "react";
import { Link } from "react-router-dom";
import "./css/SearchResult.css";
import ReactGA from "react-ga";

const searchResult = ({ data }) => {
  const GAClick = () => {
    ReactGA.event({
      category: "Search",
      action: "search youtuber",
      label: data.id,
    });
  };
  return (
    <div>
      <Link
        className="search-link"
        to={`/youtuber/${data.id}`}
        onClick={GAClick}
      >
        <img src={data.profile} width={"30"} height={"30"} alt={data.title} />

        <span>{data.title}</span>
      </Link>
    </div>
  );
};

export default searchResult;

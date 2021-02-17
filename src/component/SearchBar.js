import React, { useEffect, useState } from "react";
import "./css/SearchBar.css";
import axios from "axios";
import SearchResult from "./SearchResult";
const secret = require("./secret");

const SearchBar = () => {
  const [searchData, setSearchData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [showList, setShowList] = useState([]);
  const [focusCheck, setFocusCheck] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("search get start");
        const response = await axios.get(
          `http://${secret.BACKEND_IP}:9000/search`
        );
        // console.log(response.data);
        setSearchData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleFocus = (e) => {
    setFocusCheck(true);
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.placeholder = "유튜버를 검색해보세요!";
    setTimeout(() => {
      setFocusCheck(false);
    }, 500);
  };

  useEffect(() => {
    let target_youtuber = [];
    if (searchData !== null) {
      if (userInput !== "") {
        searchData.channels.forEach((data) => {
          let lower_title = data.title.toLowerCase();
          let lower_input = userInput.toLowerCase();
          if (lower_title.indexOf(lower_input) === -1) return;
          else target_youtuber.push(data);
        });
      }
    }
    setShowList(target_youtuber);
  }, [userInput, searchData]);

  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        placeholder="유튜버를 검색해보세요!"
        onChange={handleUserInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
      {showList.length > 0 && focusCheck === true
        ? showList.map((youtuber, idx) => (
            <SearchResult data={youtuber} key={idx} />
          ))
        : null}
    </div>
  );
};

export default SearchBar;

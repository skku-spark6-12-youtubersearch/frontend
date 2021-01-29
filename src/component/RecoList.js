import React, { useState, useEffect } from "react";
import RecoElement from "./RecoElement";
import axios from "axios";
import test_data from "../asset/test_data.json";

const RecoList = ({ category, filter }) => {
  const [items, setItems] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("get start");
        const response = await axios.get("http://localhost:9000/summary");
        // console.log(response.data);
        setItems(response.data);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
        setItems(test_data);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h2>추천 주제를 불러오고 있습니다!</h2>
      </div>
    );
  } else {
    return (
      <>
        {items.map((data, idx) => (
          <RecoElement key={idx} data={data} filter={filter} />
        ))}
      </>
    );
  }
};

export default RecoList;

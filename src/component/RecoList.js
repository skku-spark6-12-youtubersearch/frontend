import React, { useState, useEffect } from "react";
import RecoElement from "./RecoElement";
import axios from "axios";
import test_data from "../asset/test_data.json";
const secret = require("./secret");

const shuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const RecoList = ({ category, filter }) => {
  const [items, setItems] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("get start");
        const response = await axios.get(
          `http://${secret.BACKEND_IP}:9000/summary`
        );
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
        {shuffleArray(
          items.map((data, idx) => (
            <RecoElement key={idx} data={data} filter={filter} />
          ))
        )}
      </>
    );
  }
};

export default RecoList;

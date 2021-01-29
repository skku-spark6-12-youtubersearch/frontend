import React, { useState, useEffect } from "react";
import "./css/InfoWordCloud.css";
import ReactWordCloud from "react-wordcloud";
import axios from "axios";

const InfoWordCloud = ({ data }) => {
  const [wordcloudData, setWordcloudData] = useState(null);
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const youtuber_id = data.id;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/wordcloud/${youtuber_id}`
        );
        // console.log(typeof response.data.published_date);
        setWordcloudData(response.data);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [data]);

  // const callbacks = {
  //   getWordColor: (word) => {
  //     if (word.prop === 0) return "#1f77b4";
  //     //컨텐츠 키워드
  //     else if (word.prop === 1) return "#ff7f0e";
  //     //방송성격 키워드
  //     else return "#2ca02c"; //시청자 반응 키워드
  //   },
  // };

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 40],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 10,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  if (!IsLoaded) {
    return (
      <div className="info-wordcloud-box">
        <div className="head-text-box">
          <h2>유래코 분석 결과</h2>
        </div>
        <div className="loading-box">
          <h2>키워드 분석 중입니다!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="info-wordcloud-box">
        <div className="head-text-box">
          <h2>유래코 분석 결과</h2>
        </div>
        <div className="wordcloud">
          <ReactWordCloud
            // callbacks={callbacks}
            options={options}
            words={wordcloudData}
          />
        </div>
      </div>
    );
  }
};

export default InfoWordCloud;

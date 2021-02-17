import React, { useState, useEffect } from "react";
import "./css/InfoWordCloud.css";
import ReactWordCloud from "react-wordcloud";
import { Radar } from "react-chartjs-2";
import axios from "axios";
const secret = require("./secret");

const InfoWordCloud = ({ data }) => {
  const [wordcloudData, setWordcloudData] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const youtuber_id = data.id;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://${secret.BACKEND_IP}:9000/wordcloud/${youtuber_id}`
        );
        // console.log(typeof response.data.published_date);
        let clean_cloud_data = response.data.namu_tags.map((data, idx) => {
          return { text: data.tag, value: data.value };
        });
        let clean_video_tag_data = response.data.video_tags
          .map((data, idx) => {
            return { text: data.tag, value: data.value };
          })
          .sort((a, b) => {
            return b.value - a.value;
          })
          .slice(undefined, 20);
        clean_cloud_data = clean_cloud_data.concat(clean_video_tag_data);
        let clean_sentiment_data = {
          labels: response.data.comment_tags.map((data) => {
            if (data.tag === "happy") {
              return "행복";
            } else if (data.tag === "sad") {
              return "슬픔";
            } else if (data.tag === "angry") {
              return "화남";
            } else if (data.tag === "surprise") {
              return "놀람";
            } else if (data.tag === "fear") {
              return "공포";
            } else if (data.tag === "hate") {
              return "혐오";
            } else if (data.tag === "neutrality") {
              return "중립";
            } else {
              return "기타";
            }
          }),
          datasets: [
            {
              label: "시청자 댓글 반응(단위 %)",
              data: response.data.comment_tags.map((data) =>
                (data.value * 100).toFixed(2)
              ),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
            },
            {
              label: "게임 유튜버 평균(단위 %)",
              data: [34, 5, 3, 19, 7, 9, 22],
              backgroundColor: "rgba(0, 163, 210, 0.05)",
              borderColor: "rgba(0, 163, 210, 1)",
              borderWidth: 0.5,
            },
          ],
        };
        // console.log(clean_sentiment_data);
        setSentimentData(clean_sentiment_data);
        setWordcloudData(clean_cloud_data);
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

  const cloud_options = {
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

  const sentiment_options = {
    scale: {
      ticks: { beginAtZero: true },
    },
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
        <div className="info-detail-box">
          <div className="wordcloud">
            <p className="detail-what">키워드 분석</p>
            <ReactWordCloud
              // callbacks={callbacks}
              options={cloud_options}
              words={wordcloudData}
            />
          </div>
          <div className="sentiment_radar">
            <p className="detail-what">시청자 댓글 분석</p>
            <Radar
              options={sentiment_options}
              data={sentimentData}
              height={80}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default InfoWordCloud;

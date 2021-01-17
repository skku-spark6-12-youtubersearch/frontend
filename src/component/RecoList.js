import React from "react";
import "./css/RecoList.css";
import YoutuberCard from "./YoutuberCard";

let recolist = [
  "구독자 많은 유튜버",
  "조회수 많은 유튜버",
  "최근에 동영상 업로드한 유튜버",
];

let youtuberlist = [
  "감스트GAMST",
  "테스터훈 TesterHoon",
  "해물파전TV",
  "동수칸TV",
  "얍얍",
];

const RecoList = ({ category }) => {
  const card = youtuberlist.map((youtuber_name, idx) => (
    <YoutuberCard key={idx} name={youtuber_name} />
  ));

  return (
    <>
      {recolist.map((list_name) => {
        return (
          <div className="reco-box">
            <h2>{list_name}</h2>
            <div className="card-container">{card}</div>
          </div>
        );
      })}
    </>
  );
};

export default RecoList;

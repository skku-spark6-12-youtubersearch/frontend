import React from "react";
import "./css/InfoSummary.css";

const InfoSummary = ({ data }) => {
  let channel_sex = "";
  let channel_game = "";
  let channel_platform = "";
  let game_list = new Set();

  try {
    channel_sex = data.sex;
  } catch {
    channel_sex = "??";
  }

  for (let video of data.videos) {
    game_list.add(video.game_tag);
  }

  const final_list = [...game_list];

  channel_game = final_list.join(" ");

  channel_platform = data.live_platform.join(" ");

  return (
    <div className="info-wordcloud-box">
      <div className="head-text-box">
        <h2>정보 요약</h2>
      </div>
      <div className="summary-box">
        {typeof channel_sex !== "undefined" && channel_sex !== "??" ? (
          <p>성별 : {channel_sex}</p>
        ) : null}
        {channel_game !== "" ? <p>플레이 하는 게임 : {channel_game}</p> : null}
        {channel_platform !== "" ? (
          <p>라이브 방송 플랫폼 : {channel_platform}</p>
        ) : null}
      </div>
    </div>
  );
};

export default InfoSummary;

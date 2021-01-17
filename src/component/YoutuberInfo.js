import React from "react";
import youtuberData from "../asset/DB_data.json";

const YoutuberInfo = ({ match }) => {
  const youtuber_name = match.params.name;
  const youtuber_data = youtuberData.Youtuber.filter(
    (youtuber) => youtuber.youtube_title === youtuber_name
  )[0];
  return (
    <div style={{ textAlign: "center" }}>
      {Object.keys(youtuber_data).map((key, idx) => {
        return (
          <div
            style={{ backgroundColor: "gray", width: "60%", margin: "auto" }}
          >
            <h2>{key}</h2>
            <p>{Object.values(youtuber_data)[idx]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default YoutuberInfo;

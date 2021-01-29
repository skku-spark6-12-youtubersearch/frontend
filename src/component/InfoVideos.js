import React from "react";
import "./css/InfoVideos.css";

const InfoVideos = ({ data }) => {
  let popular_video = null;
  let recent_video_1 = null;
  let recent_video_2 = null;

  const best_Video_get = (data) => {
    data.videos.sort((a, b) => {
      return b.view_num[0].value - a.view_num[0].value;
    });

    popular_video = { ...data.videos[0] };

    data.videos.sort((a, b) => {
      return (
        new Date(b.published_date).getTime() -
        new Date(a.published_date).getTime()
      );
    });

    recent_video_1 = { ...data.videos[0] };
    recent_video_2 = { ...data.videos[1] };
  };

  best_Video_get(data);

  return (
    <div className="info-video-box">
      <div className="popular-video-box">
        <h2>최고 인기 동영상</h2>
        <a
          className="video_item"
          href={`https://www.youtube.com/watch?v=${popular_video.id}`}
          rel="noreferrer"
          target={"_blank"}
        >
          <img
            alt={"유튜브 비디오"}
            src={`http://img.youtube.com/vi/${popular_video.id}/mqdefault.jpg`}
          />
          <p>{popular_video.title}</p>
        </a>
      </div>

      <div className="recent-video-box">
        <h2>최근 업로드한 동영상</h2>
        <div className="multi-video-box">
          <a
            className="video_item"
            href={`https://www.youtube.com/watch?v=${recent_video_1.id}`}
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              alt={"유튜브 비디오"}
              src={`http://img.youtube.com/vi/${recent_video_1.id}/mqdefault.jpg`}
            />
            <p>{recent_video_1.title}</p>
          </a>
          <a
            className="video_item"
            href={`https://www.youtube.com/watch?v=${recent_video_2.id}`}
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              alt={"유튜브 비디오"}
              src={`http://img.youtube.com/vi/${recent_video_2.id}/mqdefault.jpg`}
            />
            <p>{recent_video_2.title}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoVideos;

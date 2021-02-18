import React, { useState, useEffect } from "react";
import "./css/InfoVideos.css";
import ReactGA from "react-ga";

const InfoVideos = ({ data }) => {
  const [popularVideo, setPopularVideo] = useState(null);
  const [recentVideo, SetRecentVideo] = useState(null);

  const GAClickBest = () => {
    ReactGA.event({
      category: "InfoPage",
      action: "click for watching youtube",
      label: "Best Video",
    });
  };
  const GAClickRecent = () => {
    ReactGA.event({
      category: "InfoPage",
      action: "click for watching youtube",
      label: "Recent Video",
    });
  };

  useEffect(() => {
    setPopularVideo(
      [
        ...data.videos.sort((a, b) => {
          return b.view_num[1].value - a.view_num[1].value;
        }),
      ].slice(undefined, 3)
    );
    SetRecentVideo(
      [
        ...data.videos.sort((a, b) => {
          return (
            new Date(b.published_date).getTime() -
            new Date(a.published_date).getTime()
          );
        }),
      ].slice(undefined, 3)
    );
  }, [data]);

  if (popularVideo === null) return null;
  else
    return (
      <div className="info-video-box">
        <div className="popular-video-box">
          <h3>
            최고 인기 동영상 <span>BEST!</span>
          </h3>
          <div className="video-list">
            {popularVideo.map((video, idx) => {
              return (
                <div className="video_item" key={idx}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    rel="noreferrer"
                    target={"_blank"}
                    onClick={GAClickBest}
                  >
                    <img
                      alt={"유튜브 비디오"}
                      src={`http://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    />
                    <p>{video.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="recent-video-box">
          <h3>
            최근 업로드한 동영상 <span>NEW!</span>
          </h3>
          <div className="video-list">
            {recentVideo.map((video, idx) => {
              return (
                <div className="video_item" key={idx}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    rel="noreferrer"
                    target={"_blank"}
                    onClick={GAClickRecent}
                  >
                    <img
                      alt={"유튜브 비디오"}
                      src={`http://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    />
                    <p>{video.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default InfoVideos;

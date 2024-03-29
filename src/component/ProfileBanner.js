import React from "react";
import "./css/ProfileBanner.css";
import ReactGA from "react-ga";

const ProfileBanner = ({ data }) => {
  const GAClick = () => {
    ReactGA.event({
      category: "InfoPage",
      action: "click for watching youtube",
      label: "banner button",
    });
  };

  return (
    <div className="profile-box">
      <div className="avatar-summary-box">
        <img src={data.profile_img} alt="profile img" className="profile-img" />
        <div className="profile-text-box">
          <h2>{data.title}</h2>
          <p>{`구독자수 : ${data.subscriber_num[0].value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>설명</p>
          <p>{data.desc.substr(0, 500) + " ......"}</p>
        </div>
      </div>
      <div className="button-contain">
        <div className="button-column">
          <a
            href={`https://www.youtube.com/channel/${data.id}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <button onClick={GAClick}>
              <i className="fab fa-youtube fa-5x"></i>
              <p>보러가기</p>
            </button>
          </a>
          <button className="not-allowed">차단목록 추가</button>
        </div>
        <div className="button-column">
          <button className="not-allowed">관심목록 추가</button>
          <button className="not-allowed">평가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

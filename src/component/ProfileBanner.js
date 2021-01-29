import React from "react";
import "./css/ProfileBanner.css";

const ProfileBanner = ({ data }) => {
  return (
    <div className="profile-box">
      <div className="avatar-summary-box">
        <img src={data.profile_img} alt="profile img" className="profile-img" />
        <div className="profile-text-box">
          <h2>{data.title}</h2>
          <p>{`구독자수 : ${data.subscriber_num[0].value}`}</p>
          <p>{data.desc.substr(0, 100) + " ......"}</p>
        </div>
      </div>
      <div className="button-contain">
        <div className="button-column">
          <a href="http://" target={"_blank"} rel="noreferrer">
            <button>보러가기</button>
          </a>
          <button className="not-allowed">차단목록 추가</button>
        </div>
        <div className="button-column">
          <button className="not-allowed">관심목록 추가</button>
          <button>평가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

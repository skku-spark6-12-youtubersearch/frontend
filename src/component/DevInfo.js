import React from "react";
import "./css/DevInfo.css";

const DevInfo = ({ data }) => {
  return (
    <div className="dev-info-box">
      <div className="dev-img-box">
        <img src={data.photo} alt="dev" />
      </div>
      <div className="dev-text-box">
        <div>이름 : {data.name}</div>
        <div>직책 : {data.position}</div>
        <div>E-mail : {data.email}</div>
        {data.phone.length > 2 ? (
          <div>phone : {data.phone}</div>
        ) : (
          <div>
            blog :{" "}
            <a target="_blank" rel="noreferrer" href={data.blog}>
              {data.blog}
            </a>
          </div>
        )}

        <div>
          역할 :{" "}
          {data.job.map((job) => (
            <span>{job}/ </span>
          ))}
        </div>
        {data.memo.length > 2 ? (
          <div className="dev-memo">
            <span style={{ position: "absolute", left: "0", top: "0" }}>"</span>
            <div>{data.memo}</div>
            <span style={{ position: "absolute", right: "0", top: "0" }}>
              "
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DevInfo;

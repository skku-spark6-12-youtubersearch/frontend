import React, { useState } from "react";
import YoutuberCard from "./YoutuberCard";
import "./css/RecoElement.css";

const RecoElement = ({ data }) => {
  const [showidx, setShowidx] = useState(0);
  const youtuberlist = data.channels;

  const card = youtuberlist.map((channel, idx) =>
    (idx < showidx ? idx + youtuberlist.length : idx) <= showidx + 4 ? (
      <YoutuberCard key={idx} info={channel} showkey={showidx} />
    ) : null
  );

  const onClick = (e) => {
    if (e.target.name === "minus") {
      setShowidx((showidx - 1 + youtuberlist.length) % youtuberlist.length);
    } else {
      setShowidx((showidx + 1) % youtuberlist.length);
    }
  };

  return (
    <div className="reco-box">
      <div className="reco-top">
        <h2>{data.list_desc}</h2>
        <div className="reco-button">
          <button name="minus" onClick={onClick} disabled={showidx === 0}>
            &lt;
          </button>
          <button
            name="plus"
            onClick={onClick}
            disabled={showidx === youtuberlist.length - 5}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="card-container">{card}</div>
    </div>
  );
};

export default RecoElement;

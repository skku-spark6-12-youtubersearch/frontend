import React, { useState, useEffect } from "react";
import YoutuberCard from "./YoutuberCard";
import "./css/RecoElement.css";

const RecoElement = ({ data, filter }) => {
  const [showidx, setShowidx] = useState(0);
  const [card, setCard] = useState(null);
  const [cardLength, setCardLength] = useState(0);

  useEffect(() => {
    let real_idx = -1;
    const youtuberlist = data.channels;
    const live_card = youtuberlist
      .sort((a, b) => {
        return a.channel_rank - b.channel_rank;
      })
      .map((channel, idx) => {
        if (filter.length === 0) {
          real_idx += 1;
          return (real_idx < showidx
            ? real_idx + youtuberlist.length
            : real_idx) <=
            showidx + 4 ? (
            <YoutuberCard key={real_idx} info={channel} showkey={showidx} />
          ) : null;
        } else {
          if (
            channel.channel_filter.some((tag) => {
              return filter.includes(tag);
            })
          ) {
            real_idx += 1;
            return (real_idx < showidx
              ? real_idx + youtuberlist.length
              : real_idx) <=
              showidx + 4 ? (
              <YoutuberCard key={real_idx} info={channel} showkey={showidx} />
            ) : null;
          } else {
            return null;
          }
        }
      });
    setCard(live_card);
    setCardLength(real_idx + 1);
  }, [filter, showidx, data]);

  const onClick = (e) => {
    if (e.target.name === "minus") {
      setShowidx((showidx - 1 + cardLength) % cardLength);
    } else {
      setShowidx((showidx + 1) % cardLength);
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
            disabled={showidx === cardLength - 5}
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

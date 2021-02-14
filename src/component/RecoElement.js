import React, { useState, useEffect } from "react";
import YoutuberCard from "./YoutuberCard";
import "./css/RecoElement.css";
import Slider from "react-slick";

const RecoElement = ({ data, filter }) => {
  const [card, setCard] = useState(null);
  const [slick_settings, setSlickSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    touchMove: false,
    draggable: false,
    accessibiliy: true,
    arrows: true,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 6000,
  });

  const no_score_list = [
    "TopAbility",
    "TopClean",
    "AbilityMaster",
    "AbilityLecture",
  ];

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
          return (
            <YoutuberCard
              key={real_idx}
              info={channel}
              listName={data.list_name}
            />
          );
        } else {
          if (
            channel.channel_filter.some((tag) => {
              return filter.includes(tag);
            })
          ) {
            real_idx += 1;
            return (
              <YoutuberCard
                key={real_idx}
                info={channel}
                listName={data.list_name}
              />
            );
          } else {
            return null;
          }
        }
      });
    if (live_card.filter((x) => x !== null).length > 10) {
      console.log(live_card.filter((x) => x !== null).length);
      setSlickSettings(
        {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          touchMove: false,
          draggable: false,
          accessibiliy: true,
          arrows: true,
          rows: 2,
          autoplay: true,
          autoplaySpeed: 6000,
        },
        setCard(live_card)
      );
    } else {
      console.log("not enough");
      setSlickSettings(
        {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          touchMove: false,
          draggable: false,
          accessibiliy: true,
          arrows: true,
          rows: 2,
          autoplay: true,
          autoplaySpeed: 6000,
        },
        setCard(live_card)
      );
    }

    // setCard(live_card);
  }, [filter, data]);

  return (
    <div className="reco-box">
      <div className="reco-top">
        <h1>{data.list_desc}</h1>
        {no_score_list.indexOf(data.list_name) === -1 ? (
          <div className="reco-score">
            <p>SCORE : </p>
            <p className="score-desc">{data.list_score_desc}</p>{" "}
          </div>
        ) : (
          <div className="reco-score">
            <p className="score-desc">{data.list_score_desc}</p>{" "}
          </div>
        )}
      </div>

      <div className="card-container">
        <Slider {...slick_settings}>{card}</Slider>
      </div>
    </div>
  );
};

export default RecoElement;

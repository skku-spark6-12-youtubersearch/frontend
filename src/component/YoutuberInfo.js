import React, { useEffect, useState } from "react";
// import youtuberData from "../asset/DB_data.json";
import axios from "axios";
import "./css/YoutuberInfo.css";

const YoutuberInfo = ({ match }) => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const youtuber_id = match.params.id;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/channel/${youtuber_id}`
        );
        // console.log(typeof response.data.published_date);
        setChannelInfo(response.data);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [match]);

  const required_keys = [
    "categories",
    "tags",

    "country",
    "default_language",
    "published_date",

    "id",
    "title",
    "desc",
    "sex",
    "live_platform",
  ];

  const required_keys_history = ["video_num", "view_num", "subscriber_num"];

  const required_keys_img = ["profile_img", "banner_img"];

  if (!isLoaded) {
    return <div>Loading..</div>;
  } else if (isLoaded && channelInfo == null) {
    return <div>no data get</div>;
  } else {
    const backgroundImageStyle = {
      backgroundImage: `url('${channelInfo["banner_img"]}')`,
      backgroundPosition: "center center",
      backgroundSize: "60% 500px",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "150px",
      marginTop: "10px",
      // backgroundColor: "red",
    };

    return (
      <div>
        <div className="banner_img_box" style={backgroundImageStyle}></div>

        {Object.keys(channelInfo).map((key, idx) => {
          if (required_keys_img.includes(key)) {
            return (
              <div key={idx} style={{ textAlign: "center" }}>
                <h2>{key}</h2>
                <img
                  src={Object.values(channelInfo[key]).join("")}
                  alt="youtuber img"
                />
              </div>
            );
          } else if (required_keys.includes(key)) {
            return (
              <div key={idx} style={{ textAlign: "center" }}>
                <h2>{key}</h2>
                <div>{Object.values(channelInfo[key])}</div>
              </div>
            );
          } else if (required_keys_history.includes(key)) {
            return (
              <div key={idx} style={{ textAlign: "center" }}>
                <h2>{key}</h2>
                <div>{channelInfo[key][0]["value"]}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
};

export default YoutuberInfo;

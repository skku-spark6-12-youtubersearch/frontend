import React, { useEffect, useState } from "react";
// import youtuberData from "../asset/DB_data.json";
import axios from "axios";
import "./css/YoutuberInfo.css";
import ProfileBanner from "./ProfileBanner";
import InfoVideos from "./InfoVideos";
import InfoWordCloud from "./InfoWordCloud";
import InfoSummary from "./InfoSummary";
const secret = require("./secret");

const YoutuberInfo = ({ match }) => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const youtuber_id = match.params.id;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://${secret.BACKEND_IP}:9000/channel/${youtuber_id}`
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

  if (!isLoaded) {
    return <div>Loading..</div>;
  } else if (isLoaded && channelInfo == null) {
    return <div>no data get</div>;
  } else {
    const backgroundImageStyle = {
      backgroundImage: `url('${channelInfo["banner_img"]}')`,
      backgroundPosition: "center center",
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      // width: `50vw - 70px`,
      height: "200px",
      marginTop: "10px",
      marginLeft: "70px",
      paddingLeft: "0",
      // backgroundColor: "red",
    };

    return (
      <div className="info-page-box">
        <div className="banner_img_box" style={backgroundImageStyle}></div>
        <ProfileBanner data={channelInfo} />
        <hr width={"100%"} color={"#CFCFCF"} style={{ marginLeft: "75px" }} />
        <InfoVideos data={channelInfo} />
        <hr width={"100%"} color={"#CFCFCF"} style={{ marginLeft: "75px" }} />
        <InfoSummary data={channelInfo} />
        <hr width={"100%"} color={"#CFCFCF"} style={{ marginLeft: "75px" }} />
        <InfoWordCloud data={channelInfo} />
        <hr width={"100%"} color={"#CFCFCF"} style={{ marginLeft: "75px" }} />
      </div>
    );
  }
};

export default YoutuberInfo;

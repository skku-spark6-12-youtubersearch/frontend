import "./App.css";
import TopBanner from "./component/TopBanner";
import Home from "./component/Home";
import YoutuberInfo from "./component/YoutuberInfo";
import AdminDBinsert from "./component/AdminDBinsert";
import SideBar from "./component/SideBar";
import Developers from "./component/Developers";
import Feedback from "./component/Feedback";
import { Route, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log("tracking start");
  }, []);
  const history = useHistory();
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
    // console.log("tracking change");
  });
  return (
    <>
      <Route path="/" component={TopBanner} />
      <Route path="/" component={SideBar} />
      <Route path="/" component={Home} exact />
      <Route path="/youtuber/:id" component={YoutuberInfo} />
      <Route path="/admin/dbinsert" component={AdminDBinsert} />
      <Route path="/developers" component={Developers} />
      <Route path="/feedback" component={Feedback} />
    </>
  );
}

export default App;

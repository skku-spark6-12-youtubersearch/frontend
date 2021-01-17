import "./App.css";
import TopBanner from "./component/TopBanner";
import Home from "./component/Home";
import YoutuberInfo from "./component/YoutuberInfo";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" component={TopBanner} />
      <Route path="/" component={Home} exact />
      <Route path="/youtuber/:name" component={YoutuberInfo} />
    </>
  );
}

export default App;

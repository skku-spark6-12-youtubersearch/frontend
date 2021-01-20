import "./App.css";
import TopBanner from "./component/TopBanner";
import Home from "./component/Home";
import YoutuberInfo from "./component/YoutuberInfo";
import AdminDBinsert from "./component/AdminDBinsert";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" component={TopBanner} />
      <Route path="/" component={Home} exact />
      <Route path="/youtuber/:id" component={YoutuberInfo} />
      <Route path="/admin/dbinsert" component={AdminDBinsert} />
    </>
  );
}

export default App;

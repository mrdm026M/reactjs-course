import { Route, Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Favorites from "./pages/Favorites";
import Layout from "./component/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact>
          <AllMeetUps />
        </Route>
        <Route path={"/new"}>
          <NewMeetUps />
        </Route>
        <Route path={"/fav"}>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

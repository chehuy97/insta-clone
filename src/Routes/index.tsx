import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StoryPage from "../Pages/Story";
import NavigationRoute from "./NavigationRoute";
import LoginPage from "../Pages/Login";

const Routes = () => {
  const isAuthenticated = localStorage.getItem("@authenticated");

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={isAuthenticated ? NavigationRoute : LoginPage}
        />
        <Route path="/stories" component={StoryPage} />
      </Switch>
    </Router>
  );
};

export default Routes;

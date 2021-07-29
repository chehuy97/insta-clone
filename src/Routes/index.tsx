import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StoryPage from "../Pages/Story";
import NavigationRoute from "./NavigationRoute";
import LoginPage from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoutes";

const Routes = () => {
  const isLoggedin = !(
    localStorage.getItem("@authenticated") == "" ||
    localStorage.getItem("@authenticated") == null
  );

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={isLoggedin ? "/project" : "/signin"} />
        <Route path="/signin" component={LoginPage} />
        <ProtectedRoute path="/project">
          <NavigationRoute />
        </ProtectedRoute>
        <ProtectedRoute path="/project/home/stories">
          <StoryPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default Routes;

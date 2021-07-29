import { Route, useRouteMatch, Redirect } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import HomePage from "../Pages/Home";
import WallPage from "../Pages/Wall";
import ChatPage from "../Pages/Chat";
import ExplorePage from "../Pages/Explore";
import { useEffect } from "react";
import StoryPage from "../Pages/Story";

const NavigationRoutes = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log("navigationroute");

    console.log("match is " + match.path + " and url " + match.url);
  });

  return (
    <>
      <Route
        path={`${match.path}/home/stories`}
        exact
        render={() => <StoryPage />}
      />
      <NavigationBar />
      <Route path={`${match.path}/home`} exact render={() => <HomePage />} />
      <Route path={`${match.path}/chat`} render={() => <ChatPage />} />
      <Route path={`${match.path}/explore`} render={() => <ExplorePage />} />
      {match.isExact && <Redirect to={`${match.url}/home`} />}
    </>
  );
};

export default NavigationRoutes;

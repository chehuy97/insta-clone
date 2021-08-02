import { Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import HomePage from "../Pages/Home";
import WallPage from "../Pages/Wall";
import ChatPage from "../Pages/Chat";
import ExplorePage from "../Pages/Explore";
import { useEffect, useState } from "react";
import StoryPage from "../Pages/Story";

const NavigationRoutes = () => {
  const match = useRouteMatch();
  const histoty = useHistory();
  const [isShowNavBar, setIsShowNavBar] = useState(true)

  useEffect(() => {
    let listener = histoty.listen((location) => {
      setIsShowNavBar(location.pathname == `${match.path}/home/stories` ? false : true)
    });

    return () => {
      listener();
    };
  });

  return (
    <>
      { isShowNavBar ? <NavigationBar/> : null}
      <Route
        path={`${match.path}/home/stories`}
        exact
        render={() => <StoryPage />}
      />
      <Route path={`${match.path}/home`} exact render={() => <HomePage />} />
      <Route path={`${match.path}/chat`} render={() => <ChatPage />} />
      <Route path={`${match.path}/explore`} render={() => <ExplorePage />} />
      {match.isExact && <Redirect to={`${match.url}/home`} />}
    </>
  );
};

export default NavigationRoutes;

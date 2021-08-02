import { news } from "../../Mocks/newsfeed";
import {
  HomeContainer,
  NewFeedContainer,
  StoryContainer,
  StoryScrollButton
} from "./styles";
import NewsItem from "../../Components/NewsItem";
import RightNavigation from "../../Components/RightNavigation";
import StoryItem from "../../Components/StoryItem";
import { stories } from '../../Mocks/story'
import previousImg from '../../Assets/Images/icons/previous.png'
import nextImg from '../../Assets/Images/icons/next.png'
import React, { useEffect } from 'react'
import StoryPage from '../Story'
import { Route, useRouteMatch, RouteProps, useLocation } from 'react-router-dom'

const Home = (props:RouteProps) => {
  const listNewsFeed = news.map((item) => <NewsItem data={item} />);
  const listStories = stories.map((item, index) => <StoryItem data={item} index={index}/>);
  const location  = useLocation()
  const match = useRouteMatch()
  // useEffect(() => {
  //   console.log('location is ',location)
  //   console.log('match is ',match)
  // })
  return (
    <>
    <HomeContainer>
      <NewFeedContainer>
        <StoryContainer>
          {listStories}
          {/* <StoryScrollButton url={nextImg} /> */}
        </StoryContainer>
        {listNewsFeed}
      </NewFeedContainer>
      <RightNavigation/>    
    </HomeContainer>
    </>
  );
};

export default Home;

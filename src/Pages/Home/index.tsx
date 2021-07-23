import { news } from "../../Mocks/newsfeed";
import { followers } from "../../Mocks/follower";
import {
  HomeContainer,
  NewFeedContainer,
  StoryContainer,
} from "./styles";
import NewsItem from "../../Components/NewsItem";
import AccountItem from "../../Components/RightNavigation/Account";
import FollowerItem from "../../Components/RightNavigation/FollowerItem";
import footer from '../../Assets/Images/footer.png'
import RightNavigation from "../../Components/RightNavigation";
import StoryItem from "../../Components/StoryItem";
import { stories } from '../../Mocks/story'

const Home = () => {
  const listNewsFeed = news.map((item) => <NewsItem data={item} />);
  const listStories = stories.map((item => <StoryItem data={item}/>))

  return (
    <HomeContainer>
      <NewFeedContainer>
        <StoryContainer>
          {listStories}
        </StoryContainer>
        {listNewsFeed}
      </NewFeedContainer>
      <RightNavigation/>
    </HomeContainer>
  );
};

export default Home;

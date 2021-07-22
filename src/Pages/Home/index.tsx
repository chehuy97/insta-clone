import { news } from "../../Mocks/newsfeed";
import { followers } from "../../Mocks/follower";
import {
  HomeContainer,
  MoreContainer,
  NewFeedContainer,
  SeeAllButton,
  StoryContainer,
  SuggestText,
  SuggestTitleContainer,
  HelpImage
} from "./styles";
import NewsItem from "./NewsItem";
import AccountItem from "./Account";
import FollowerItem from "./FollowerItem";
import helpImage from '../../Assets/Images/help.png'

const Home = () => {
  const listNewsFeed = news.map((item) => <NewsItem data={item} />);
  const listFollowers = followers.map((item) => <FollowerItem data={item} />);

  return (
    <HomeContainer>
      <NewFeedContainer>
        <StoryContainer></StoryContainer>
        {listNewsFeed}
      </NewFeedContainer>
      <MoreContainer>
        <AccountItem />
        <SuggestTitleContainer>
          <SuggestText>Suggestions For You</SuggestText>
          <SeeAllButton>See All</SeeAllButton>
        </SuggestTitleContainer>
        {listFollowers}
        <HelpImage imageURL={helpImage}/>
      </MoreContainer>
    </HomeContainer>
  );
};

export default Home;

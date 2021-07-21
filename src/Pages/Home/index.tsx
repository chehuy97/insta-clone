import { news } from "../../Mocks/newfeed";
import { HomeContainer, NewFeedContainer, StoryContainer } from "./styles";
import NewsItem from './NewsItem'

const Home = () => {

  const listNewsFeed = news.map(item => <NewsItem data={item} />)

  return (
    <HomeContainer>
      <StoryContainer></StoryContainer>
      {listNewsFeed}
    </HomeContainer>
  );
};

export default Home;

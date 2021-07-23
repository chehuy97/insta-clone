import {
  MoreContainer,
  SuggestTitleContainer,
  SuggestText,
  SeeAllButton,
  FooterImage,
} from "./styles";
import footer from "../../Assets/Images/footer.png";
import AccountItem from "./Account";
import FollowerItem from "./FollowerItem";
import { followers } from "../../Mocks/follower";

const RightNavigation = () => {
  const listFollowers = followers.map((item) => <FollowerItem data={item} />);
  return (
    <MoreContainer>
      <AccountItem />
      <SuggestTitleContainer>
        <SuggestText>Suggestions For You</SuggestText>
        <SeeAllButton>See All</SeeAllButton>
      </SuggestTitleContainer>
      {listFollowers}
      <FooterImage src={footer} />
    </MoreContainer>
  );
};

export default RightNavigation;

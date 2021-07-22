import { Follower } from "../../../Mocks/follower";
import { InfoContainer } from "../Account/styles";
import {
  FollowerContainer,
  Avatar,
  FollowerText,
  FollowerName,
  FollowButton,
} from "./styles";

type followerProps = {
  data: Follower;
};

const FollowerItem = ({ data }: followerProps) => {
  return (
    <FollowerContainer>
      <InfoContainer>
        <Avatar url={data.image} />
        <div>
          <FollowerName>{data.name}</FollowerName>
          <FollowerText>{"Followed by " + data.friend}</FollowerText>
        </div>
      </InfoContainer>
      <FollowButton>Follow</FollowButton>
    </FollowerContainer>
  );
};

export default FollowerItem;

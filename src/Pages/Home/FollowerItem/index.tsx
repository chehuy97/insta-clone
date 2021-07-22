import { Follower } from "../../../Mocks/follower";
import { InfoContainer } from "../Account/styles";
import { FollowerContainer, Avatar, FollowerText, FollowButton } from "./styles";

type followerProps = {
  data: Follower;
};

const FollowerItem = ({ data }: followerProps) => {
  return (
    <FollowerContainer>
      <InfoContainer>
        <Avatar url={data.image} />
        <FollowerText>
          <b>{data.name}</b>
          <br />
          {"Follow by " + data.friend}
        </FollowerText>
      </InfoContainer>
      <FollowButton>
          Follow
      </FollowButton>
    </FollowerContainer>
  );
};

export default FollowerItem;

import {
  AccountContainer,
  Avatar,
  InfoContainer,
  SwitchButton,
  Name,
  Username,
} from "./styles";
import avatarUrl from "../../../Assets/Images/avatar/avatar-60.png";

const Account = () => {
  return (
    <AccountContainer>
      <InfoContainer>
        <Avatar url={avatarUrl} />
        <div>
          <Username>chehuy97</Username>
          <Name>Che Quang huy</Name>
        </div>
      </InfoContainer>
      <SwitchButton>Switch</SwitchButton>
    </AccountContainer>
  );
};

export default Account;

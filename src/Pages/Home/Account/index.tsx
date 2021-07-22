import {
  AccountContainer,
  Avatar,
  InfoContainer,
  SwitchButton,
  AccountText,
} from "./styles";
import avatarUrl from "../../../Assets/Images/avatar/avatar-60.png";

const Account = () => {
  return (
    <AccountContainer>
      <InfoContainer>
        <Avatar url={avatarUrl} />
        <AccountText>
          <b>chehuy97</b>
          <br />
          Che Quang huy
        </AccountText>
      </InfoContainer>
      <SwitchButton>Switch</SwitchButton>
    </AccountContainer>
  );
};

export default Account;

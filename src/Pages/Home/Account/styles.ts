import styled from "styled-components";
import { color, mixin } from "../../../Utils/AppContant";

export const AccountContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  ${mixin.avatar(50)}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const AccountText = styled.p`
  font-size: 13px;
  margin: 15px;
`;
export const SwitchButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  ${mixin.button(color.lightBlue, '#B0D6F8')};
`;

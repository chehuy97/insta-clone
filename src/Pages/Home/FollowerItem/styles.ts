import styled from "styled-components";
import { mixin, color } from '../../../Utils/AppContant'

export const FollowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  ${mixin.avatar(36)}
`;

export const FollowerText = styled.p`
  font-size: 13px;
  margin: 15px;
`;

export const FollowButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  ${mixin.button(color.lightBlue, '#B0D6F8')};
`
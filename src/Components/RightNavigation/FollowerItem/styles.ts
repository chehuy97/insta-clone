import styled from "styled-components";
import { mixin, color } from '../../../Utils/AppContant'

export const FollowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  ${mixin.circleImage(36)};
  margin-right: 15px;
`;

export const FollowerName = styled.button`
  font-size: 13px;
  font-weight: bold;
  padding: 0;
  ${mixin.button("black", "gray")}
`;
export const FollowerText = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
  padding: 0;
`;

export const FollowButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  ${mixin.button(color.lightBlue, '#B0D6F8')};
`
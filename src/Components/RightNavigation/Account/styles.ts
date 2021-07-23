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
  ${mixin.circleImage(50)};
  margin-right: 15px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Username = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  ${mixin.button("black", "gray")}
`;
export const Name = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
  padding: 0;
`;
export const SwitchButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  ${mixin.button(color.lightBlue, "#B0D6F8")};
`;

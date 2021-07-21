import { mixin, dimen } from "../../../Utils/AppContant";
import styled from "styled-components";

export const NewsContainer = styled.div`
  width: ${dimen.contentWidth}px;
  background: white;
  ${mixin.border};
  padding-bottom: 30px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: white;
  padding: 0px 12px 0px 12px;
`;

export const HeaderImage = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin-right: 10px;
  ${({ imageURL }: { imageURL: string }) => mixin.backgroundImage(imageURL)};
`;

export const HeaderText = styled.p`
  font-size: medium;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.div`
  height: 650px;
  ${({ imageURL }: { imageURL: string }) => mixin.backgroundImage(imageURL)};
`;

export const ReactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ReactIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0px 10px 0px 10px;
`;
export const LikeText = styled.p`
  font-size: small;
  font-weight: bold;
  margin-left: 10px;
`;

export const Title = styled.p`
margin: 0px 15px 0px 10px;
font-size: 14px;
max-lines: 2;
`
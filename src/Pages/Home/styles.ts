import styled from "styled-components";
import { mixin, dimen } from "../../Utils/AppContant";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StoryContainer = styled.div`
  width: ${dimen.contentWidth}px;
  height: 100px;
  ${mixin.border}
  margin: 20px 0px 20px 0px;
  background-color: white;
`;

export const NewFeedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MoreContainer = styled.div`
  width: 280px;
  height: 480px;
  margin: 20px 0px 0px 30px;
`;

export const SuggestTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SuggestText = styled.p`
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;

export const SeeAllButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  ${mixin.button('black', 'gray')}
`;

export const HelpImage = styled.div`
    ${({ imageURL }: { imageURL: string }) => mixin.backgroundImage(imageURL)};
`

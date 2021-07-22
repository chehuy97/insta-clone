import styled from "styled-components";
import { mixin, dimen } from "../../Utils/AppContant";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
`;

export const StoryContainer = styled.div`
  width: ${dimen.contentWidth}px;
  height: 100px;
  ${mixin.border}
  margin: 20px 0px 20px 0px;
  background-color: white;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const NewFeedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 150px;
  @media screen and (max-width: 1100px) {
    margin-right: 0px;
  }
`;

export const MoreContainer = styled.div`
  position: fixed;
  width: 280px;
  height: 480px;
  top: 80px;
  margin-left: 780px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
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
  ${mixin.button("black", "gray")}
`;

export const FooterImage = styled.img`
  margin-top: 20px;
  cursor: pointer;
`;

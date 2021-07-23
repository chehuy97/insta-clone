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
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  ${mixin.border}
  margin: 20px 0px 20px 0px;
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


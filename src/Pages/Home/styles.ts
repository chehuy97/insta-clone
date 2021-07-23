import styled from "styled-components";
import { mixin, dimen } from "../../Utils/AppContant";
import ScrollContainer from 'react-indiana-drag-scroll'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
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

export const StoryContainer = styled(ScrollContainer)`
  width: ${dimen.contentWidth}px;
  height: 100px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  ${mixin.border}
  margin: 20px 0px 20px 0px;
  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const StoryScrollButton = styled.div`
  ${mixin.circleImage(25)}
  position: absolute;
  right: 10px;
  top: 37.5px;
`

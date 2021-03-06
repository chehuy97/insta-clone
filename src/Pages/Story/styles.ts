import { screen } from '@testing-library/react';
import styled from "styled-components";
import { mixin, dimen, color } from "../../Utils/AppContant";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.img`
  z-index: 1;
  width: 103px;
  height: 33px;
  margin: 20px;
`;
export const CloseButton = styled.img`
  z-index: 1;
  width: 20px;
  height: 20px;
  margin: 20px;
  &:active {
    transform: translateY(2px);
  }
`;

export const StoryContainer = styled.div`
  z-index: 2;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MainStoryWrapper = styled.div`
  width: ${dimen.mainStoryWidth}px;
  height: ${dimen.mainStoryWidth * 1.8}px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  @media screen and (max-width: 2000px) {
    width: ${(dimen.mainStoryWidth * 2) / 3}px;
    height: ${(dimen.mainStoryWidth * 1.8 * 2) / 3}px;
  }
`;

export const Image = styled.img`
  width: ${dimen.mainStoryWidth}px;
  @media screen and (max-width: 2000px) {
    width: ${(dimen.mainStoryWidth * 2) / 3}px;
  }
`;

export const ChangeStoryButton = styled.div`
  margin: 0px 20px 0px 20px;
  ${mixin.circleImage(30)};
`;

export const ProgressBar = styled(LinearProgress)`
  && {
    background-color: rgba(230, 230, 230, 0.3);
    position: absolute;
    top: 20px;
    ${({ marginLeft, width, index }: { marginLeft: number; width: number, index:number }) => mixin.progressBar(marginLeft, width, index)}; 
  }
`;

export const ControlBar = styled.div`
  position: absolute;
  top: 35px;
  left: 5px;
  right: 5px;
  height: 40px;
  display: flex;
  padding: 0px 10px 0px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageImage = styled.div`
  ${mixin.circleImage(30)}
`;

export const PageName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 0px 0px 0px 10px;
`;

export const BarButton = styled.div`
  width: 15px;
  height: 15px;
  margin: 0px 0px 0px 10px;
  ${({ url }: { url: string }) => mixin.backgroundImage(url)}
`;

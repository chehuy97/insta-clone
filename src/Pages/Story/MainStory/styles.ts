import styled from 'styled-components'
import { dimen, mixin  } from '../../../Utils/AppContant'
import LinearProgress from "@material-ui/core/LinearProgress";

export const MainStoryWrapper = styled.div`
  width: ${dimen.mainStoryWidth}px;
  height: 1060px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: ${dimen.mainStoryWidth}px;
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
    left: ${({ marginLeft }: { marginLeft: number; width: number }) =>
      marginLeft}px;
    width: ${({ width }: { marginLeft: number; width: number }) => width}px;
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
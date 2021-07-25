import { number } from 'prop-types';
import styled from "styled-components";
import { mixin, dimen, color } from "../../Utils/AppContant";
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress';

export const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 103px;
  height: 33px;
  margin: 20px;
`;
export const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  margin: 20px;
  &:active {
    transform: translateY(2px);
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

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
`

export const ProgressBar = styled(LinearProgress)`
&&{
  background-color: rgba(230, 230, 230, 0.3);
  position: absolute;
  top: 20px;
  left: ${({marginLeft}:{marginLeft:number, width:number}) => marginLeft}px;
  width: ${({width}:{marginLeft:number, width:number}) => width}px;
}
`

// export const useStyles = makeStyles({
//   linearBar:{
//     position: 'absolute',
//     background: 'rgba(230, 230, 230, 0.3)',
//     top: 20,
//     left: ({amount}:{amount:number}) => 5+(dimen.mainStoryWidth - (amount+1)*5)/amount*(amount-1),
//     width: ({amount}:{amount:number}) => 5+(dimen.mainStoryWidth - (amount+1)*5)/amount,
//   }
// })
import styled, {css} from "styled-components";
import { mixin, dimen } from "../../../Utils/AppContant";
import index from "../MainStory";

export const Container = styled.div`
  width: ${dimen.extraStoryWidth};
  height: ${dimen.extraStoryWidth * 1.8}px;
  background: gray;
  margin-left: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 2000px) {
    width: ${(dimen.extraStoryWidth * 2) / 3}px;
    height: ${(dimen.extraStoryWidth * 1.8 * 2) / 3}px;
  }
  @media screen and (max-width: 1500px) {
    ${({index}:{index:number}) => index === 2 && css`
      display: none;
    `}
  }
    @media screen and (max-width: 1100px) {
    ${({index}:{index:number}) => index === 1 && css`
      display: none;
    `}
  }
`;


export const PageWrapper = styled.div`
  position: absolute;
  left: 40%;
  right: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageImage = styled.div`
  ${mixin.circleImage(30)};
`;

export const PageName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 0;
`;
export const Image = styled.img`
  width: ${dimen.extraStoryWidth}px;
  @media screen and (max-width: 2000px) {
    width: ${(dimen.extraStoryWidth * 2) / 3}px;
  }
`;

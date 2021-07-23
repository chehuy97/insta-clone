import styled from "styled-components";
import { mixin } from "../../Utils/AppContant";

export const Container = styled.div`
  height: 83px;
  margin: 0px 5px 0px 5px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 29px;
  border: solid #bebebe 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  ${mixin.circleImage(50)}
`;

export const Name = styled.p`
  margin: 0px;
  height: 20px;
  font-size: 12px;
  color: gray;
  overflow: hidden;
`;

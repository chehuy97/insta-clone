import styled from "styled-components";
import { mixin } from "../../Utils/AppContant";

export const Container = styled.div`
  width: 90px;
  height: 80px;
  margin: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 29px;
  border: solid #bebebe 2px;
  padding: 2px 1px 2px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  ${mixin.circleImage(52)}
`;

export const Name = styled.p`
  margin: 0;
  width: 70px;
  font-size: 14px;
`;

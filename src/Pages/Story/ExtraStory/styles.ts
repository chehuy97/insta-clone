import styled from 'styled-components'
import { mixin } from  '../../../Utils/AppContant'


export const Container = styled.div`
  width: 280px;
  height: 460px;
  background: gray;
  margin-left: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PageWrapper = styled.div`
  position: absolute;
  left: 40%;
  right: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PageImage = styled.div`
  ${mixin.circleImage(30)};
`

export const PageName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 0;
`;
export const Image = styled.img`
width: 280px;
`

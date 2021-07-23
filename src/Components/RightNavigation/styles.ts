import styled from 'styled-components'
import { mixin } from '../../Utils/AppContant'

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
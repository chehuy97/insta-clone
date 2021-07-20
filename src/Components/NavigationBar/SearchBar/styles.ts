import styled from "styled-components";
import { colors } from "../../../Config/AppContant";

export const InputView = styled.div`
  margin: 0px 250px 0px 250px;
  @media screen and (max-width: 1000px) {
    margin: 0px 0px 0px 0px;
  }
  @media screen and (max-width: 520px) {
      display: none;
  }
`;

export const Input = styled.input`
  width: 215px;
  height: 24px;
  border: solid ${colors.border} 1.5px;
  border-radius: 3px;
  background-color: ${colors.background};
`;

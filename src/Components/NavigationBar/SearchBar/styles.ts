import styled from "styled-components";
import { mixin, color } from "../../../Utils/AppContant";

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
  ${mixin.border}
  background-color: ${color.background};
`;

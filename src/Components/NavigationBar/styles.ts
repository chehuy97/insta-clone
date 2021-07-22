import styled from "styled-components";
import { color } from "../../Utils/AppContant";

export const NavView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-bottom: solid ${color.border} 1.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  background: white;
  @media screen and (max-width: 1000px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  margin-top: 5px;
  margin-right: 10px;
`;

export const ButtonView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

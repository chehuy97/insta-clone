import { css } from "styled-components";

export const color = {
  border: "#DCDCDC",
  background: "#FAFAFA",
  backgroundLight: "#ebecf0",
};

export const images = {
  logo: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
};

export const dimen = {
    contentWidth: 610,
}

export const mixin = {
  backgroundImage: (imageURL: string) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  border: css`
    border-radius: 3px;
    border: 1.5px solid ${color.border};
  `,
};

import { css } from "styled-components";

export const color = {
  border: "#DCDCDC",
  background: "#FAFAFA",
  backgroundLight: "#ebecf0",
  lightBlue: "#0095f6"
};

export const fontSize = {
  normal: 14,
};

export const images = {
  logo: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",
  logo_light: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png',
  login_image:'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg'
};

export const dimen = {
  contentWidth: 600,
  mainStoryWidth: 550,
  extraStoryWidth: 250
};

export const mixin = {
  backgroundImage: (imageURL: string) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
  `,
  border: css`
    border-radius: 3px;
    border: 1.5px solid ${color.border};
  `,
  button: (color:string, clickedColor:string) => css`
    border: 0px;
    cursor: pointer;
    background-color: transparent;
    color: ${color};
    &:active {
      color: ${clickedColor};
      transform: translateY(2px);
    }
  `,
  circleImage: (size:number) => css`
  width: ${size}px;
  height: ${size}px;
  cursor: pointer;
  border-radius: ${size/2}px;
  ${({ url }: { url: string }) => mixin.backgroundImage(url)}
  `,
  progressBar: (left:number, width:number, index:number) => css`
    margin-left: ${left}px;
    width: ${width}px;
    @media screen and (max-width: 2000px){
      margin-left: ${left-10/3-index*(width+10)/3}px;
      width: ${width*2/3}px;
    }
  `
};

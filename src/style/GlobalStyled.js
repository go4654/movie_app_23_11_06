import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  bgColor: "#1d1d1d",
  fontColor: "#fff",
  pointColor: "crimson",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainColors.bgColor};
        color: ${mainColors.fontColor};
        letter-spacing: -1px;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color:${mainColors.fontColor};
    }

`;

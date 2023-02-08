import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "testFont";
  }
  @font-face {
    font-family: "testFont";
    src: url("/fonts/SUIT.css");
  }
`;

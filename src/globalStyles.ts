import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  #root {
    max-width: 1440px;
    margin: 0 auto;
  }

  :root {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }
`;

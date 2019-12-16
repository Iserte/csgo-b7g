import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  body {
    background: #eee;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #444;
  }
  ::-webkit-scrollbar-thumb {
    background: #222
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #111;
  }
`;

export default GlobalStyle;

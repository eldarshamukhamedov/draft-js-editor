import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .DraftEditor-root {
    box-sizing: border-box;
    padding: 0.5rem;

    div[contenteditable] {
      min-height: 6rem;
      max-height: 10rem;
      overflow-y: auto;
    }
  }
`;

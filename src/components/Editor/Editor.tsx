import React from "react";
import { GlobalStyle, Wrapper } from "./";
import { DraftEditor } from "./DraftEditor";
import { Toolbar } from "../Toolbar";
import { Provider } from "../../contexts/Store";
import { parseHtml } from "../../helpers";

const HTML_STRING = `
<h1>A Tale Of Two Cities.</h1>
<p>All these things, and a thousand <strong>like</strong> them, came to pass.</p>
`;

export const Editor = () => (
  <Provider initialState={parseHtml(HTML_STRING)}>
    <Wrapper>
      <GlobalStyle />
      <DraftEditor />
      <Toolbar />
    </Wrapper>
  </Provider>
);

import React from "react";
import Draft from "draft-js";
import { GlobalStyle, Wrapper } from "./";
import { DraftEditor } from "./DraftEditor";
import { Toolbar } from "../Toolbar";
import { Provider } from "../../contexts/Store";
import { parseHtml } from "../../helpers";
import { decorator } from "./decorators";

const HTML = `
<h1>A Tale Of Two Cities.</h1>
<p>All these things, and a thousand <strong>like</strong> them, came to pass.</p>
`;

const initialState = Draft.EditorState.set(parseHtml(HTML), { decorator });

export const Editor = () => (
  <Provider initialState={initialState}>
    <Wrapper>
      <GlobalStyle />
      <DraftEditor />
      <Toolbar />
    </Wrapper>
  </Provider>
);

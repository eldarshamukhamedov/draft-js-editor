import React from "react";
import Draft from "draft-js";
import { GlobalStyle, Wrapper } from "./";
import { DraftEditor } from "./DraftEditor";
import { Toolbar } from "../Toolbar";
import { Provider } from "../../contexts/Store";

const HTML_STRING = `
<h1>A Tale Of Two Cities.</h1>
<p>All these things, and a thousand <strong>like</strong> them, came to pass.</p>
`;

const parseHtml = (html: string) => {
  const { contentBlocks, entityMap } = Draft.convertFromHTML(html);
  return Draft.EditorState.createWithContent(
    Draft.ContentState.createFromBlockArray(contentBlocks, entityMap),
  );
};

export const Editor = () => (
  <Provider initialState={{ draftState: parseHtml(HTML_STRING) }}>
    <Wrapper>
      <GlobalStyle />
      <DraftEditor />
      <Toolbar />
    </Wrapper>
  </Provider>
);

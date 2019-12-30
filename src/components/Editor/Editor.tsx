import React from "react";
import Draft from "draft-js";
import { GlobalStyle, Wrapper } from "./";
import { DraftEditor } from "./DraftEditor";
import { Debug } from "./Debug";
import { Toolbar } from "../Toolbar";
import { Provider } from "../Store";
import { getStateFromHtml } from "../../helpers";
import { decorator as linkDecorator } from "../Link";

const HTML = `
<h1>Rich text editor built with Draft.js</h1>
<p>You can type in plain text.</p>
<p>You <em>can</em> <strong>also</strong> add <del>inline</del> <code>styles</code>.</p>
<p>Inline <em>styles can</em> <strong>overlap </strong><del><strong>with</strong></del><del> one</del> another.</p>
<p>You can also add <a href="https://draftjs.org/" target="_self">links</a>! Select some text and click on the "Create link" button in the toolbar.</p>
<p>Still working on adding mentions... 😅</p>
<p></p>
<p>Code <a href="https://github.com/eldarshamukhamedov/draft-js-editor/" target="_self">here</a>.</p>
`;

const initialContent = getStateFromHtml(HTML);
const initialState = Draft.EditorState.set(
  Draft.EditorState.createWithContent(initialContent),
  { decorator: new Draft.CompositeDecorator([linkDecorator]) },
);

export const Editor = () => (
  <Provider initialState={initialState}>
    <Wrapper>
      <GlobalStyle />
      <DraftEditor />
      <Toolbar />
    </Wrapper>
    <Debug />
  </Provider>
);

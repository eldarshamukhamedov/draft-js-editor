import React from "react";
import Draft from "draft-js";
import { GlobalStyle, Wrapper } from "./";
import { DraftEditor } from "./DraftEditor";
import { Toolbar } from "../Toolbar";
import { Provider } from "./Store";

const INITIAL_STATE = {
  draftState: Draft.EditorState.createWithContent(
    Draft.ContentState.createFromText(
      "All these things, and a thousand like them, came to pass in and close upon the dear old year one thousand seven hundred and seventy-five.",
    ),
  ),
};

export const Editor = () => (
  <Provider initialState={INITIAL_STATE}>
    <Wrapper>
      <GlobalStyle />
      <DraftEditor />
      <Toolbar />
    </Wrapper>
  </Provider>
);

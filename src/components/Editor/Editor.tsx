import React, { useEffect, useState, useRef } from "react";
import Draft from "draft-js";
import { keyBindingFn } from "../../helpers/keyBindingFn";
import { keyCommandReducer } from "../../helpers/keyCommandReducer";
import { EditorGlobalStyle, EditorWrapper } from "./";
import { Toolbar } from "../Toolbar";

const INITIAL_STATE = Draft.EditorState.createWithContent(
  Draft.ContentState.createFromText(
    "All these things, and a thousand like them, came to pass in and close upon the dear old year one thousand seven hundred and seventy-five."
  )
);

export const Editor = () => {
  const [editorState, setEditorState] = useState(INITIAL_STATE);

  const editorRef = useRef<Draft.Editor>(null);
  useEffect(() => {
    if (editorRef.current) editorRef.current.focus();
  }, []);

  return (
    <EditorWrapper>
      <EditorGlobalStyle />
      <Draft.Editor
        customStyleMap={{ STRIKETHROUGH: { textDecoration: "line-through" } }}
        editorState={editorState}
        ref={editorRef}
        onChange={setEditorState}
        keyBindingFn={keyBindingFn}
        handleKeyCommand={command => {
          const nextState = keyCommandReducer(editorState, command);
          if (nextState) {
            setEditorState(nextState);
            return "handled";
          }
          return "not-handled";
        }}
      />
      <Toolbar editorState={editorState} onChange={setEditorState} />
    </EditorWrapper>
  );
};

import React, { useEffect, useRef } from "react";
import Draft from "draft-js";
import { keyBindingFn } from "../../helpers/keyBindingFn";
import { keyCommandReducer } from "../../helpers/keyCommandReducer";
import { useStore, replaceDraftState } from "../../contexts/Store";

export const DraftEditor = () => {
  const {
    state: { draftState },
    dispatch,
  } = useStore();
  const editorRef = useRef<Draft.Editor>(null);

  useEffect(() => {
    if (editorRef.current) editorRef.current.focus();
  }, []);

  return (
    <Draft.Editor
      customStyleMap={{ STRIKETHROUGH: { textDecoration: "line-through" } }}
      editorState={draftState}
      ref={editorRef}
      onChange={nextState => dispatch(replaceDraftState(nextState))}
      keyBindingFn={keyBindingFn}
      handleKeyCommand={command => {
        const nextState = keyCommandReducer(draftState, command);
        if (nextState) {
          dispatch(replaceDraftState(nextState));
          console.debug("HANDLED", command);
          return "handled";
        }
        console.debug("NOT HANDLED", command);
        return "not-handled";
      }}
    />
  );
};

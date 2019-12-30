import React, { useEffect, useRef } from "react";
import Draft from "draft-js";
import { useStore, commandReducer, mapKeyToCommand } from "../Store";
import { inlineKeyBindiings } from "../../options/inlineKeyBindings";
import { getInlineStyleMap } from "../../helpers";

export const DraftEditor = () => {
  const { state, setState } = useStore();
  const editorRef = useRef<Draft.Editor>(null);

  useEffect(() => {
    if (editorRef.current) editorRef.current.focus();
  }, []);

  return (
    <Draft.Editor
      customStyleMap={getInlineStyleMap(inlineKeyBindiings)}
      editorState={state}
      ref={editorRef}
      onChange={setState}
      keyBindingFn={mapKeyToCommand}
      handleKeyCommand={command => {
        const nextState = commandReducer(state, command);
        if (nextState) {
          setState(nextState);
          console.debug("HANDLED", command);
          return "handled";
        }
        console.debug("NOT HANDLED", command);
        return "not-handled";
      }}
    />
  );
};

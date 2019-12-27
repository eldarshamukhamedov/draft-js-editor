import React, { useContext, useState } from "react";
import Draft from "draft-js";

export const defaultEditorState = Draft.EditorState.createEmpty();

// Context
export interface Context {
  state: Draft.EditorState;
  setState(nextState: Draft.EditorState): void;
}
export const defaultContext: Context = {
  state: defaultEditorState,
  setState: () => undefined,
};
export const Context = React.createContext(defaultContext);
export const useStore = () => useContext(Context);

// Provider
export interface ProviderProps {
  children?: React.ReactNode;
  initialState: Draft.EditorState;
}
export const Provider = ({ children, initialState }: ProviderProps) => {
  const [state, setState] = useState(initialState);
  console.debug("[state]", {
    state: state.toJS(),
    selection: state.getSelection().toJS(),
    content: state.getCurrentContent().toJS(),
    blockMap: state
      .getCurrentContent()
      .getBlockMap()
      .toJS(),
  });
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

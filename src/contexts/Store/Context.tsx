import React, { Dispatch, useContext, useReducer } from "react";
import {
  EditorActions,
  EditorState,
  defaultEditorState,
  reducer,
} from "./reducer";

// Context
export interface Context<A> {
  state: EditorState;
  dispatch: Dispatch<A>;
}
export const defaultContext: Context<EditorActions> = {
  state: defaultEditorState,
  dispatch: () => undefined,
};
export const Context = React.createContext(defaultContext);
export const useStore = () => useContext(Context);

// Provider
export interface ProviderProps {
  children?: React.ReactNode;
  initialState: EditorState;
}
export const Provider = ({ children, initialState }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

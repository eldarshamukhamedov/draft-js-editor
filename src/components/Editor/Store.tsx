import React, { Dispatch, useContext, useState, useReducer } from "react";
import Draft from "draft-js";

// Actions
export enum ActionType {
  KeyCommand = "KeyCommand",
  ToggleInline = "ToggleInline",
  ReplaceDraftState = "ReplaceDraftState",
}

export interface KeyCommandAction {
  type: ActionType.KeyCommand;
  payload: string;
}
export const keyCommand = (command: string): KeyCommandAction => ({
  type: ActionType.KeyCommand,
  payload: command,
});

export interface ToggleInlineAction {
  type: ActionType.ToggleInline;
}
export const toggleInline = (): ToggleInlineAction => ({
  type: ActionType.ToggleInline,
});

export interface ReplaceDraftStateAction {
  type: ActionType.ReplaceDraftState;
  payload: Draft.EditorState;
}
export const replaceDraftState = (
  nextDraftState: Draft.EditorState,
): ReplaceDraftStateAction => ({
  type: ActionType.ReplaceDraftState,
  payload: nextDraftState,
});

export type Actions =
  | KeyCommandAction
  | ToggleInlineAction
  | ReplaceDraftStateAction;

// State
interface EditorState {
  draftState: Draft.EditorState;
  lastKeyCommand?: string;
}
const defaultEditorState: EditorState = {
  draftState: Draft.EditorState.createEmpty(),
};

// Reducer
export const reducer = (state: EditorState, action: Actions) => {
  switch (action.type) {
    case ActionType.ReplaceDraftState:
      return { ...state, draftState: action.payload };
    default:
      return state;
  }
};

// Context
interface EditorContext<A> {
  state: EditorState;
  dispatch: Dispatch<A>;
}
const defaultContext: EditorContext<Actions> = {
  state: defaultEditorState,
  dispatch: () => undefined,
};
export const Context = React.createContext(defaultContext);
export const useStore = () => useContext(Context);

// Provider
interface ProviderProps {
  children?: React.ReactNode;
  initialState: EditorState;
}
export const Provider = ({ children, initialState }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.debug("[state]", state.draftState.toJS());
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

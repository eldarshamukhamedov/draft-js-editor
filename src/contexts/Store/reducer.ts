import Draft from "draft-js";
import {
  ActionType,
  KeyCommandAction,
  ToggleInlineAction,
  ReplaceDraftStateAction,
} from "./actions";

export type EditorActions =
  | KeyCommandAction
  | ToggleInlineAction
  | ReplaceDraftStateAction;

export interface EditorState {
  draftState: Draft.EditorState;
  lastKeyCommand?: string;
}
export const defaultEditorState: EditorState = {
  draftState: Draft.EditorState.createEmpty(),
};

export const reducer = (state: EditorState, action: EditorActions) => {
  switch (action.type) {
    case ActionType.ReplaceDraftState:
      return {
        ...state,
        draftState: action.payload,
      };

    case ActionType.ToggleInline:
      return {
        ...state,
        draftState: Draft.RichUtils.toggleInlineStyle(
          state.draftState,
          action.payload,
        ),
      };

    default:
      return state;
  }
};

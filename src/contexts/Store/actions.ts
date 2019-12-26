import { InlineStyles } from "../../types";

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
  payload: InlineStyles;
}
export const toggleInline = (style: InlineStyles): ToggleInlineAction => ({
  type: ActionType.ToggleInline,
  payload: style,
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

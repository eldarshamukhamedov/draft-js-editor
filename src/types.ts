import { DraftEditorCommand } from "draft-js";

export enum InlineStyles {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
  StrikeThrough = "STRIKETHROUGH",
}

export type EditorCommand = DraftEditorCommand | null;

export interface KeyOption {
  key: string;
  keyCode: number;
  command: boolean;
  shift: boolean;
}

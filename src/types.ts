import { DraftEditorCommand } from "draft-js";

export type EditorCommand = DraftEditorCommand | null;

export interface KeyOption {
  key: string;
  keyCode: number;
  command: boolean;
  shift: boolean;
}

export enum InlineStyles {
  Bold = "BOLD",
  Code = "CODE",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
  StrikeThrough = "STRIKETHROUGH",
}

export interface InlineOption {
  style: InlineStyles;
  label: string;
  icon: string;
  keySelector: Partial<KeyOption>;
  editorCommand: EditorCommand;
}

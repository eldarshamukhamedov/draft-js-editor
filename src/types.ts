import { DraftEditorCommand } from "draft-js";

export type EditorCommand = DraftEditorCommand | "link" | null;

export interface KeyOption {
  key: string;
  keyCode: number;
  command: boolean;
  shift: boolean;
}

export interface KeyBinding {
  keySelector: Partial<KeyOption>;
  editorCommand: EditorCommand;
}

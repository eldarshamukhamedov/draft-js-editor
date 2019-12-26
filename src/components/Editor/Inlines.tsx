import { matches } from "lodash";
import { EditorCommand, InlineStyles, KeyOption } from "../../types";

export interface InlineOption {
  style: InlineStyles;
  label: string;
  icon: string;
  keySelector: Partial<KeyOption>;
  editorCommand: EditorCommand;
}

export const filterKey = (key: KeyOption, selector: Partial<KeyOption>) =>
  matches(selector)(key);

export const inlineOptions: InlineOption[] = [
  {
    style: InlineStyles.Bold,
    label: "Bold",
    icon: "format_bold",
    keySelector: { command: true, keyCode: 66 }, // Cmd + B
    editorCommand: "bold",
  },
  {
    style: InlineStyles.Italic,
    label: "Italic",
    icon: "format_italic",
    keySelector: { command: true, keyCode: 73 }, // Cmd + I
    editorCommand: "italic",
  },
  {
    style: InlineStyles.Underline,
    label: "Underline",
    icon: "format_underline",
    keySelector: { command: true, keyCode: 85 }, // Cmd + U
    editorCommand: "underline",
  },
  {
    style: InlineStyles.StrikeThrough,
    label: "Strike-through",
    icon: "format_strikethrough",
    keySelector: { command: true, shift: true, keyCode: 88 }, // Cmd + Shift + X
    editorCommand: "strikethrough",
  },
];

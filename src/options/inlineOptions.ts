import { InlineStyles, InlineOption } from "../types";

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
  {
    style: InlineStyles.Code,
    label: "Code",
    icon: "code",
    keySelector: { command: true, keyCode: 192 }, // Cmd + `
    editorCommand: "code",
  },
];

export const keyOptions = [
  {
    keySelector: { key: "Backspace" },
    editorCommand: "backspace",
  },
  {
    keySelector: { command: true, key: "Backspace" },
    editorCommand: "backspace-word",
  },
  {
    keySelector: { key: "Delete" },
    editorCommand: "delete",
  },
  {
    keySelector: { command: true, key: "Delete" },
    editorCommand: "delete-word",
  },
];

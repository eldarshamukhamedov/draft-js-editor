import React from "react";
import { KeyBinding } from "../types";

export interface InlineKeyBinding extends KeyBinding {
  style: InlineStyles;
  css: React.CSSProperties;
  label: string;
  icon: string;
}

export enum InlineStyles {
  Bold = "BOLD",
  Code = "CODE",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
  StrikeThrough = "STRIKETHROUGH",
}

export const inlineKeyBindiings: InlineKeyBinding[] = [
  {
    style: InlineStyles.Bold,
    css: { fontWeight: "bold" },
    label: "Bold",
    icon: "format_bold",
    keySelector: { command: true, keyCode: 66 }, // Cmd + B
    editorCommand: "bold",
  },
  {
    style: InlineStyles.Italic,
    css: { fontStyle: "italic" },
    label: "Italic",
    icon: "format_italic",
    keySelector: { command: true, keyCode: 73 }, // Cmd + I
    editorCommand: "italic",
  },
  {
    style: InlineStyles.Underline,
    css: { textDecoration: "underline" },
    label: "Underline",
    icon: "format_underline",
    keySelector: { command: true, keyCode: 85 }, // Cmd + U
    editorCommand: "underline",
  },
  {
    style: InlineStyles.StrikeThrough,
    css: { textDecoration: "line-through" },
    label: "Strike-through",
    icon: "format_strikethrough",
    keySelector: { command: true, shift: true, keyCode: 88 }, // Cmd + Shift + X
    editorCommand: "strikethrough",
  },
  {
    style: InlineStyles.Code,
    label: "Code",
    css: { fontFamily: "monospace" },
    icon: "code",
    keySelector: { command: true, keyCode: 192 }, // Cmd + `
    editorCommand: "code",
  },
];

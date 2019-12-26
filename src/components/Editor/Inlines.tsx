import { InlineStyles } from "../../types";

export interface InlineOption {
  style: InlineStyles;
  label: string;
  icon: string;
}

export const INLINE_OPTIONS: InlineOption[] = [
  {
    style: InlineStyles.Bold,
    label: "Bold",
    icon: "format_bold",
  },
  {
    style: InlineStyles.Italic,
    label: "Italic",
    icon: "format_italic",
  },
  {
    style: InlineStyles.Underline,
    label: "Underline",
    icon: "format_underline",
  },
  {
    style: InlineStyles.StrikeThrough,
    label: "Strike-through",
    icon: "format_strikethrough",
  },
];

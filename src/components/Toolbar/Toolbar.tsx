import React from "react";
import Draft from "draft-js";
import { Icon } from "../Icon";
import { ToolbarButton } from "./ToolbarButton";
import { Wrapper } from "./Wrapper";
import { useStore } from "../Editor";
import { replaceDraftState } from "../Editor/Store";

enum InlineStyles {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
  StrikeThrough = "STRIKETHROUGH",
}

interface ButtonOption {
  style: InlineStyles;
  label: string;
  icon: string;
}

const BUTTON_OPTIONS: ButtonOption[] = [
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

export const Toolbar = () => {
  const {
    state: { draftState },
    dispatch,
  } = useStore();

  return (
    <Wrapper>
      {BUTTON_OPTIONS.map(({ label, style, icon }) => (
        <ToolbarButton
          key={style}
          title={label}
          active={draftState.getCurrentInlineStyle().has(style)}
          onClick={() =>
            dispatch(
              replaceDraftState(
                Draft.RichUtils.toggleInlineStyle(draftState, style),
              ),
            )
          }
        >
          <Icon>{icon}</Icon>
        </ToolbarButton>
      ))}
    </Wrapper>
  );
};

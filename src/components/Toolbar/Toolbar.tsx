import React from "react";
import { Icon } from "../Icon";
import { ToolbarButton } from "./ToolbarButton";
import { Wrapper } from "./Wrapper";
import { useStore, toggleInline } from "../../contexts/Store";
import { INLINE_OPTIONS } from "../Editor/Inlines";

export const Toolbar = () => {
  const {
    state: { draftState },
    dispatch,
  } = useStore();

  return (
    <Wrapper>
      {INLINE_OPTIONS.map(({ label, style, icon }) => (
        <ToolbarButton
          key={style}
          title={label}
          active={draftState.getCurrentInlineStyle().has(style)}
          onClick={() => dispatch(toggleInline(style))}
        >
          <Icon>{icon}</Icon>
        </ToolbarButton>
      ))}
    </Wrapper>
  );
};

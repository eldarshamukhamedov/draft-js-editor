import React from "react";
import { Icon } from "../Icon";
import { ToolbarButton } from "./ToolbarButton";
import { Wrapper } from "./Wrapper";
import { useStore, toggleInline } from "../../contexts/Store";
import { inlineOptions } from "../../options/inlineOptions";

export const Toolbar = () => {
  const {
    state: { draftState },
    dispatch,
  } = useStore();

  return (
    <Wrapper>
      {inlineOptions.map(({ label, style, icon }) => (
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

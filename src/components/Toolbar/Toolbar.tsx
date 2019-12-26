import React from "react";
import { RichUtils } from "draft-js";
import { Icon } from "../Icon";
import { ToolbarButton } from "./ToolbarButton";
import { Wrapper } from "./Wrapper";
import { useStore } from "../../contexts/Store";
import { inlineKeyBindiings } from "../../options/inlineKeyBindings";

export const Toolbar = () => {
  const { state, setState } = useStore();

  return (
    <Wrapper>
      {inlineKeyBindiings.map(({ label, style, icon }) => (
        <ToolbarButton
          key={style}
          title={label}
          active={state.getCurrentInlineStyle().has(style)}
          onClick={() => setState(RichUtils.toggleInlineStyle(state, style))}
        >
          <Icon>{icon}</Icon>
        </ToolbarButton>
      ))}
    </Wrapper>
  );
};

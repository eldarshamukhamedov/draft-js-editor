import React from "react";
import Draft from "draft-js";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import { Wrapper } from "./Wrapper";
import { useStore } from "../Store";
import { LinkButton } from "../Link";
import { inlineKeyBindiings } from "../../options/inlineKeyBindings";

export const Toolbar = () => {
  const { state, setState } = useStore();

  return (
    <Wrapper>
      {inlineKeyBindiings.map(({ label, style, icon }) => (
        <IconButton
          key={style}
          title={label}
          active={state.getCurrentInlineStyle().has(style)}
          onClick={() =>
            setState(Draft.RichUtils.toggleInlineStyle(state, style))
          }
        >
          <Icon>{icon}</Icon>
        </IconButton>
      ))}
      <LinkButton />
    </Wrapper>
  );
};

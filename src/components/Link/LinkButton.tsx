import React from "react";
import Draft from "draft-js";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import { useStore } from "../Store";

export const LinkButton = () => {
  const { state, setState } = useStore();
  const selection = state.getSelection();
  const content = state.getCurrentContent();

  return (
    <IconButton
      key="LINK"
      title="Create link"
      hidden={selection.isCollapsed()}
      onClick={() => {
        const linkUrl = window.prompt("Enter link URL");
        if (linkUrl) {
          const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
            href: linkUrl,
            url: linkUrl,
          });

          const entityKey = contentWithEntity.getLastCreatedEntityKey();

          const nextContent = Draft.Modifier.applyEntity(
            contentWithEntity,
            selection,
            entityKey,
          );

          setState(Draft.EditorState.push(state, nextContent, "apply-entity"));
        }
      }}
    >
      <Icon>insert_link</Icon>
    </IconButton>
  );
};

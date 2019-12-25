import React from "react";
import styled from "styled-components";
import { EditorState as DraftEditorState, RichUtils } from "draft-js";
import { Icon } from "../Icon";
import { ToolbarButton } from "./ToolbarButton";

const ToolbarWrapper = styled.div`
  box-sizing: border-box;
  display: inline-flex;

  ${ToolbarButton} {
    margin: 0.15rem;
  }
`;

interface ToolbarProps {
  editorState: DraftEditorState;
  onChange(nextEditorState: DraftEditorState): void;
}
export const Toolbar = ({ editorState, onChange }: ToolbarProps) => {
  const toggleInline = (inlineStyle: string) => () =>
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const inlineStyle = editorState.getCurrentInlineStyle();

  return (
    <ToolbarWrapper>
      <ToolbarButton
        active={inlineStyle.has("BOLD")}
        onClick={toggleInline("BOLD")}
      >
        <Icon>format_bold</Icon>
      </ToolbarButton>
      <ToolbarButton
        active={inlineStyle.has("ITALIC")}
        onClick={toggleInline("ITALIC")}
      >
        <Icon>format_italic</Icon>
      </ToolbarButton>
      <ToolbarButton
        active={inlineStyle.has("UNDERLINE")}
        onClick={toggleInline("UNDERLINE")}
      >
        <Icon>format_underline</Icon>
      </ToolbarButton>
      <ToolbarButton
        active={inlineStyle.has("STRIKETHROUGH")}
        onClick={toggleInline("STRIKETHROUGH")}
      >
        <Icon>format_strikethrough</Icon>
      </ToolbarButton>
    </ToolbarWrapper>
  );
};

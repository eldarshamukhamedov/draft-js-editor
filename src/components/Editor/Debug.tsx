import React from "react";
import Draft from "draft-js";
import styled from "styled-components";
import { useStore } from "../Store";
import { getHtmlFromState } from "../../helpers";

const Section = styled.div`
  font-family: monospace;
  margin: 0;
  overflow: auto;
  scrollbar-color: #222 #111;
  padding: 1rem;
  white-space: break-spaces;
`;
const SectionHeader = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;

  background: #ffffff0f;
  box-sizing: border-box;
  font-size: 10px;
  height: 50vh;
  text-align: left;

  > ${Section}:not(:last-child) {
    border-right: 1px solid #fffa;
  }
`;

const getSelectionData = (state: Draft.EditorState) => {
  const content = state.getCurrentContent();
  const selection = state.getSelection();

  const startKey = selection.getStartKey();
  const startOffset = selection.getStartOffset();
  const endKey = selection.getEndKey();
  const endOffset = selection.getEndOffset();
  const startBlock = content.getBlockForKey(startKey);
  const endBlock = content.getBlockForKey(endKey);
  const startEntityKey = startBlock.getEntityAt(startOffset);
  const endEntityKey = endBlock.getEntityAt(endOffset);
  const isBackward = selection.getIsBackward();
  const isCollapsed = String(selection.isCollapsed());
  const startEntityType =
    startEntityKey && content.getEntity(startEntityKey).getType();
  const startEntityData =
    startEntityKey && content.getEntity(startEntityKey).getData();
  const endEntityType =
    endEntityKey && content.getEntity(endEntityKey).getType();
  const endEntityData =
    endEntityKey && content.getEntity(endEntityKey).getData();

  return {
    start: {
      block: startKey,
      offset: startOffset,
      entityKey: startEntityKey,
      entityType: startEntityType,
      entityData: startEntityData,
    },
    end: {
      block: endKey,
      offset: endOffset,
      entityKey: endEntityKey,
      entityType: endEntityType,
      entityData: endEntityData,
    },
    isBackward,
    isCollapsed,
  };
};

const prettyPrint = (obj: any) => JSON.stringify(obj, null, 2);

export const Debug = () => {
  const { state } = useStore();

  return (
    <Wrapper>
      <Section>
        <SectionHeader>Selection info</SectionHeader>
        {prettyPrint(getSelectionData(state))}
      </Section>
      <Section>
        <SectionHeader>Raw content</SectionHeader>
        {prettyPrint(Draft.convertToRaw(state.getCurrentContent()))}
      </Section>
      <Section>
        <SectionHeader>HTML content</SectionHeader>
        {getHtmlFromState(state)}
      </Section>
    </Wrapper>
  );
};

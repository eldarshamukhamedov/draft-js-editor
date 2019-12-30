import React from "react";
import styled from "styled-components";
import { DraftDecoratorComponentProps } from "../../types";

const StyledLink = styled.a`
  cursor: pointer;
  color: lightgreen;
`;

interface LinkEntityData {
  href: string;
}

export const Link = ({
  children,
  contentState,
  entityKey,
}: DraftDecoratorComponentProps) => {
  if (!entityKey) return children;

  const entityData = contentState
    .getEntity(entityKey)
    .getData() as LinkEntityData;

  console.debug("[Link] entityData", entityData);
  return (
    <StyledLink
      data-entity-key={entityKey}
      href={entityData.href}
      title={entityData.href}
      onClick={() => window.open(entityData.href, "_blank")}
    >
      {children}
    </StyledLink>
  );
};

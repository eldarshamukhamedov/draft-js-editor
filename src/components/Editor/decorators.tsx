import React from "react";
import Draft from "draft-js";

// create link entity
export const createLink = (editor: Draft.EditorState) => {
  const content = editor
    .getCurrentContent()
    .createEntity("LINK", "IMMUTABLE", { url: "https://www.google.com" });

  const nextContent = Draft.Modifier.applyEntity(
    content,
    editor.getSelection(),
    content.getLastCreatedEntityKey(),
  );

  return Draft.EditorState.push(editor, nextContent, "apply-entity");
};

// const getLinkFrom
export const decorator = new Draft.CompositeDecorator([
  {
    strategy(contentBlock, callback, contentState) {
      contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        if (entityKey) {
          const entityType = contentState.getEntity(entityKey).getType();
          return entityType === "LINK";
        }
        return false;
      }, callback);
    },
    component() {
      return <h3>LINK!</h3>;
    },
  },
]);

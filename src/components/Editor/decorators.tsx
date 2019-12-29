import React from "react";
import Draft from "draft-js";
import { matchAll } from "../../helpers";

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

export const decorator = new Draft.CompositeDecorator([
  // {
  //   strategy: (contentBlock, callback, contentState) => {
  //     contentBlock.findEntityRanges(character => {
  //       const entityKey = character.getEntity();
  //       if (entityKey) {
  //         const entityType = contentState.getEntity(entityKey).getType();
  //         return entityType === "LINK";
  //       }
  //       return false;
  //     }, callback);
  //   },
  //   component: () => <h3>LINK!</h3>,
  // },

  {
    strategy: (contentBlock, callback, contentState) =>
      matchAll(contentBlock.getText(), /#[\w\u0590-\u05ff]+/g).forEach(
        ({ start, end }) => callback(start, end),
      ),
    component: (props: { children: React.ReactNode }) => (
      <code style={{ color: "lightblue" }}>{props.children}</code>
    ),
  },
]);

import Draft from "draft-js";
import { Link } from "./Link";

export const decorator: Draft.DraftDecorator = {
  strategy: (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
      const entityKey = character.getEntity();
      if (entityKey) {
        const entityType = contentState.getEntity(entityKey).getType();
        return entityType === "LINK";
      }
      return false;
    }, callback);
  },
  component: Link,
};

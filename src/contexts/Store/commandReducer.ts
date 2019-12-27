import Draft from "draft-js";
import { uniq } from "lodash";
import { inlineKeyBindiings } from "../../options/inlineKeyBindings";

export const commandReducer = (state: Draft.EditorState, command: string) => {
  switch (command) {
    case "bold":
    case "code":
    case "italic":
    case "underline":
    case "strikethrough": {
      const inlineOption = inlineKeyBindiings.find(
        ({ editorCommand }) => editorCommand === command,
      );

      return inlineOption
        ? Draft.RichUtils.toggleInlineStyle(state, inlineOption.style)
        : null;
    }

    case "split-block": {
      const nextContent = Draft.Modifier.splitBlock(
        state.getCurrentContent(),
        state.getSelection(),
      );
      return Draft.EditorState.push(state, nextContent, "split-block");
    }

    case "backspace":
    case "backspace-word": {
      return Draft.RichUtils.onBackspace(state);
    }

    case "delete":
    case "delete-word": {
      return Draft.RichUtils.onDelete(state);
    }

    case "link": {
      const content = state.getCurrentContent();
      const selection = state.getSelection();
      const blocks = content.getBlocksAsArray();

      console.debug("[LINK]", blocks.map(b => b.toJS()));
      console.debug("[SELECTION]", {
        anchorKey: selection.getAnchorKey(),
        anchorOffset: selection.getAnchorOffset(),
        focusKey: selection.getFocusKey(),
        focusOffset: selection.getFocusOffset(),
      });

      const umm = uniq([selection.getAnchorKey(), selection.getFocusKey()])
        .map(content.getBlockForKey)
        .map(block => {
          const ranges = [];
          block.findEntityRanges(
            character => {
              const entityKey = character.getEntity();
              if (entityKey) {
                console.debug("[ENTITY KEY]", entityKey);
                const entityType = content.getEntity(entityKey).getType();
                return entityType === "LINK";
              }
              console.debug("[NOPE]");
              return false;
            },
            (start, end) => {
              ranges.push([start, end]);
            },
          );
        });

      // const content = state
      //   .getCurrentContent()
      //   .createEntity("LINK", "IMMUTABLE", { url: "https://www.google.com" });

      // const entityKey = content.getLastCreatedEntityKey();

      // const nextContent = Draft.Modifier.applyEntity(
      //   content,
      //   state.getSelection(),
      //   entityKey,
      // );

      // const tempState = Draft.EditorState.push(
      //   state,
      //   nextContent,
      //   "apply-entity",
      // );

      // return Draft.RichUtils.toggleLink(
      //   tempState,
      //   tempState.getSelection(),
      //   entityKey,
      // );
      return null;
    }

    default:
      return null;
  }
};

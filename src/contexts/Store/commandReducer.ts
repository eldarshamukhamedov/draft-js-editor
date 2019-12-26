import Draft from "draft-js";
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

    default:
      return null;
  }
};

import { EditorState, RichUtils } from "draft-js";

export const keyCommandReducer = (state: EditorState, command: string) => {
  switch (command) {
    case "strikethrough":
      return RichUtils.toggleInlineStyle(state, "STRIKETHROUGH");
    default:
      return RichUtils.handleKeyCommand(state, command) || state;
  }
};

import { EditorState, RichUtils, Modifier } from "draft-js";

export const keyCommandReducer = (state: EditorState, command: string) => {
  switch (command) {
    case "strikethrough":
      return RichUtils.toggleInlineStyle(state, "STRIKETHROUGH");
    case "split-block": {
      const content = state.getCurrentContent();
      const selection = state.getSelection();
      const nextContent = Modifier.splitBlock(content, selection);
      return EditorState.push(state, nextContent, "split-block");
    }
    default:
      return RichUtils.handleKeyCommand(state, command);
  }
};

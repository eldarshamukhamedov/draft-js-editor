import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
import { EditorCommand, KeyOption } from "../types";
import { inlineOptions, filterKey } from "../components/Editor/Inlines";

const getKeyOption = (e: React.KeyboardEvent): KeyOption => ({
  key: e.key,
  keyCode: e.keyCode,
  command: KeyBindingUtil.hasCommandModifier(e),
  shift: e.shiftKey,
});

export const keyBindingFn = (e: React.KeyboardEvent): EditorCommand => {
  const inlineCommand = inlineOptions
    .filter(inline => filterKey(getKeyOption(e), inline.keySelector))
    .map(inline => inline.editorCommand)
    .pop();

  return inlineCommand || getDefaultKeyBinding(e);
};

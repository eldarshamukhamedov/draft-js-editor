import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
import { matches } from "lodash";
import { EditorCommand, KeyOption } from "../types";
import { inlineOptions } from "../options/inlineOptions";

const getKeyOption = (e: React.KeyboardEvent): KeyOption => ({
  key: e.key,
  keyCode: e.keyCode,
  command: KeyBindingUtil.hasCommandModifier(e),
  shift: e.shiftKey,
});

const filterKey = (key: KeyOption, selector: Partial<KeyOption>) =>
  matches(selector)(key);

// Maps keyboard events to editor commands
// Ex. Cmd + Shift + X -> 'strikethrough'
export const keyBindingFn = (e: React.KeyboardEvent): EditorCommand => {
  console.debug("[key]", e.key, e.keyCode);
  const inlineCommand = inlineOptions
    .filter(inline => filterKey(getKeyOption(e), inline.keySelector))
    .map(inline => inline.editorCommand)
    .pop();

  return inlineCommand || getDefaultKeyBinding(e);
};

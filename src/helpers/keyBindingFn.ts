import {
  getDefaultKeyBinding,
  KeyBindingUtil,
  DraftEditorCommand,
} from "draft-js";

type EditorCommand = DraftEditorCommand | string | null;

interface KeyOption {
  key: string;
  keyCode: number;
  commandKey: boolean;
  shiftKey: boolean;
}
const getKeyOption = (e: React.KeyboardEvent) => ({
  key: e.key,
  keyCode: e.keyCode,
  command: KeyBindingUtil.hasCommandModifier(e),
  shift: e.shiftKey,
});

export const keyBindingFn = (e: React.KeyboardEvent): EditorCommand => {
  const { key, keyCode, command, shift } = getKeyOption(e);
  console.debug("[key]", { key, keyCode, command, shift });
  if (command && keyCode === 192) return "code"; // Cmd + `
  if (command && shift && keyCode === 88) return "strikethrough"; // Cmd + Shift + X

  return getDefaultKeyBinding(e);
};

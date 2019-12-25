import { getDefaultKeyBinding, KeyBindingUtil } from "draft-js";

const { hasCommandModifier } = KeyBindingUtil;

// Map key event -> key command. Override default key bindings here
export const keyBindingFn = (e: React.KeyboardEvent) => {
  if (e.key === "X" && hasCommandModifier(e)) {
    return "strikethrough";
  }
  return getDefaultKeyBinding(e);
};

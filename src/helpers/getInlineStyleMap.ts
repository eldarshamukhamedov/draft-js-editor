import Draft from "draft-js";
import { InlineKeyBinding } from "../options/inlineKeyBindings";

export const getInlineStyleMap = (
  inlineKeyBindings: InlineKeyBinding[],
): Draft.DraftStyleMap =>
  inlineKeyBindings
    .map(({ style, css }) => ({ style, css }))
    .reduce((acc, item) => Object.assign(acc, item), {});

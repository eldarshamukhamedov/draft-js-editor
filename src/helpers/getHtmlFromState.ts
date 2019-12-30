import Draft from "draft-js";
import convertToHtml from "draftjs-to-html";

export const getHtmlFromState = (state: Draft.EditorState) => {
  const rawContent = Draft.convertToRaw(state.getCurrentContent());
  return convertToHtml(rawContent);
};

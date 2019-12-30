import Draft from "draft-js";

export const getStateFromHtml = (html: string) => {
  const { contentBlocks, entityMap } = Draft.convertFromHTML(html);
  return Draft.ContentState.createFromBlockArray(contentBlocks, entityMap);
};

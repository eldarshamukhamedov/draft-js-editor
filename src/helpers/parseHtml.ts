import Draft from "draft-js";

export const parseHtml = (html: string) => {
  const { contentBlocks, entityMap } = Draft.convertFromHTML(html);
  return Draft.EditorState.createWithContent(
    Draft.ContentState.createFromBlockArray(contentBlocks, entityMap),
  );
};

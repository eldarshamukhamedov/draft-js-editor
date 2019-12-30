// import Draft from "draft-js";

export type EditorCommand = Draft.DraftEditorCommand | "link" | null;

export interface KeyOption {
  key: string;
  keyCode: number;
  command: boolean;
  shift: boolean;
}

export interface KeyBinding {
  keySelector: Partial<KeyOption>;
  editorCommand: EditorCommand;
}

// From Flow types:
// https://github.com/facebook/draft-js/blob/64b51dff37dbc385532a56ed19e23a9da1437385/src/model/decorators/DraftDecorator.js#L53-L73
export interface DraftDecoratorComponentProps {
  blockKey: string;
  children?: React.ReactNode;
  contentState: Draft.ContentState;
  decoratedText: string;
  dir?: string;
  end: number;
  entityKey?: string;
  key: React.Key;
  offsetKey: string;
  start: number;
}

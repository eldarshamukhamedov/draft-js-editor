import * as React from "react";
import { render } from "react-dom";
import { Editor } from "./components/Editor";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

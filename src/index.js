import React from "react";
import ReactDOM from "react-dom";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import makeEditorConfig from './make-editor-config';

import './styles.css';

const editorConfig = makeEditorConfig();

function App() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    fetch('./static/default-template.html')
    .then(response => response.text())
    .then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App" style={{ maxWidth: editorConfig.width}}>
      <JoditEditor
        value={data}
        config={editorConfig}
        onChange={value => setData(value)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

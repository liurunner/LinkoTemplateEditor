import React from "react";
import ReactDOM from "react-dom";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import makeEditorConfig from './make-editor-config';
import * as _ from 'lodash';
import './styles.css';

function App() {
  const [data, setData] = React.useState('');
  const [editorConfig, setEditorConfig] = React.useState(makeEditorConfig());

  React.useEffect(() => {
    fetch('./static/default-template.html')
    .then(response => response.text())
    .then((data) => {
      setData(data);
    });
    fetch('./static/config.json')
    .then(response => response.text())
    .then((data) => {
      let config = JSON.parse(data);
      _.map(config.mergeFields, (group) => {
        _.map(group.fields, (field) => {
          let resolvedName = _.isEmpty(group.path) ? field.name : group.path + '.' + field.name;
          field.resolvedName = resolvedName;
        });
      });
      console.debug(config);

      let newEditorConfig = makeEditorConfig(config);
      setEditorConfig(newEditorConfig);
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

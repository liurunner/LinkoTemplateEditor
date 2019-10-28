import React from "react";
import config from "./config";
import * as _ from 'lodash';

const MergeFieldInput = (props) => {
  if (!props.editor) {
    throw new Error('editor is required');
  }
  if (!props.close) {
    throw new Error('close is required');
  }
  if (_.isUndefined(config.mergeFields) || _.isEmpty(config.mergeFields)) {
    throw new Error('config.mergeFields is undefined');
  }

  const onMergeFieldSelected = (e) => {
    let mergeField = e.target.value;
    if (mergeField) {
      props.editor.selection.insertNode(
        props.editor.create.inside.fromHTML("<input id=\"" + mergeField + "\" type=\"text\" name=\"" + mergeField + "\" value=\"{{" + mergeField + "}}\"/>")
      );
    }
    props.close();
  }

  return (
    <div className="merge-field-popup">
        <label className="merge-field-label" for="mergeField">Insert MergeField: </label>
        <select id="mergeField" name="mergeField" size="10"
          className="merge-field-select" 
          onChange={onMergeFieldSelected}>
            {
              _.map(config.mergeFields, (group, groupIndex) => {
                return (<optgroup key={`g-${groupIndex}`} label={group.group}>
                  {
                    _.map(group.fields, (field, fieldIndex) => {
                      var fieldName = _.isEmpty(group.path) ? field.name : group.path + '.' + field.name
                      return <option key={`g-${groupIndex}-f-${fieldIndex}`} className="merge-field-select-option" value={fieldName}>{field.name}</option>
                    })
                  }
                </optgroup>
              );
              })
            }
        </select>
    </div>
  );
}

export default MergeFieldInput;
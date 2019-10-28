import React from "react";
import * as _ from 'lodash';

const MergeFieldInput = (props) => {
  if (!props.editor) {
    throw new Error('editor is required');
  }
  if (!props.close) {
    throw new Error('close is required');
  }  
  if (_.isUndefined(props.config) || _.isUndefined(props.config.mergeFields) || _.isEmpty(props.config.mergeFields)) {
    throw new Error('config.mergeFields is undefined');
  }

  const findField = (fieldNameToFind) => {
    for (let groupIndex=0; groupIndex < props.config.mergeFields.length; groupIndex++) {
        let group = props.config.mergeFields[groupIndex];
        for (let fieldIndex=0; fieldIndex < group.fields.length; fieldIndex++) {
          let field = group.fields[fieldIndex];
          if (field.resolvedName === fieldNameToFind) {
            return field;
          }
        }
    }
  }

  const onMergeFieldSelected = (e) => {
    let mergeFieldName = e.target.value;
    if (mergeFieldName) {
      let field = findField(mergeFieldName);
      if (!field) {
        console.error(`Cannot find field ${mergeFieldName}`);
        return;
      }
      let inputHtml ='';
      if (field.type === 'boolean') {
        inputHtml += "<input id=\"" + field.name + "-true\" type=\"radio\" name=\"" + field.resolvedName + "\" value=\"true\" title=\"" + field.resolvedName + "\">Yes</input>";
        inputHtml += "<input id=\"" + field.name + "-false\" type=\"radio\" name=\"" + field.resolvedName + "\" value=\"false\" title=\"" + field.resolvedName + "\">No</input>";
      } else {
        inputHtml += "<input id=\"" + field.name + "\" type=\"" + field.type + "\" name=\"" + field.resolvedName + "\" " + 
          "value=\"{{" + field.resolvedName + "}}\" title=\"" + field.resolvedName + "\"/>";
      }
      props.editor.selection.insertNode(props.editor.create.inside.fromHTML(inputHtml));
    }
    props.close();
  }

  return (
    <div className="merge-field-popup">
        <label className="merge-field-label" for="mergeFieldInput">Insert MergeField Input: </label>
        <select id="mergeFieldInput" name="mergeFieldInput" size="10"
          className="merge-field-select" 
          onChange={onMergeFieldSelected}>
            {
              _.map(props.config.mergeFields, (group, groupIndex) => {
                return (<optgroup key={`g-${groupIndex}`} label={group.group}>
                  {
                    _.map(group.fields, (field, fieldIndex) => {
                      return <option key={`g-${groupIndex}-f-${fieldIndex}`} className="merge-field-select-option" value={field.resolvedName}>{field.resolvedName}</option>
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
import React from "react";
import * as _ from 'lodash';

const MergeFieldSelector = (props) => {
  if (!props.editor) {
    throw new Error('editor is required');
  }
  if (!props.close) {
    throw new Error('close is required');
  }
  if (_.isUndefined(props.config) || _.isUndefined(props.config.mergeFields) || _.isEmpty(props.config.mergeFields)) {
    throw new Error('config.mergeFields is undefined');
  }

  const onMergeFieldSelected = (e) => {
    let mergeField = e.target.value;
    if (mergeField) {
      props.editor.selection.insertNode(
        props.editor.create.inside.fromHTML("{{" + mergeField + "}}")
      );
    }
    props.close();
  }

  return (
    <div className="merge-field-popup">
        <label className="merge-field-label" for="mergeFieldSelect">Insert MergeField Select: </label>
        <select id="mergeFieldSelect" name="mergeFieldSelect" size="10"
          className="merge-field-select" 
          onChange={onMergeFieldSelected}>
            {
              _.map(props.config.mergeFields, (group, groupIndex) => {
                return (<optgroup key={`g-${groupIndex}`} label={group.group}>
                  {
                    _.map(group.fields, (field, fieldIndex) => {
                      return <option key={`g-${groupIndex}-f-${fieldIndex}`} className="merge-field-select-option" value={field.resolvedName}>{field.name}</option>
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

export default MergeFieldSelector;
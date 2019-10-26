import React from "react";
import config from "./config";
import * as _ from 'lodash';

const MergeFieldSelector = (props) => {
  if (!props.editor) {
    throw new Error('editor is required');
  }
  if (_.isUndefined(config.mergeFields) || _.isEmpty(config.mergeFields)) {
    throw new Error('config.mergeFields is undefined');
  }

  const onMergeFieldSelected = (e) => {
    let mergeField = e.target.value;
    if (mergeField) {
      props.editor.selection.insertNode(
        props.editor.create.inside.fromHTML("{{" + mergeField + "}}")
      );
    }
  }

  const mergeFields = config.mergeFields;
  console.log('mergeFields:', mergeFields);

  return (
    <div className="merge-field-popup">
        <label className="merge-field-label">Insert MergeField: </label>
        <select className="merge-field-select" onChange={onMergeFieldSelected}>
            <option className="merge-field-select-option" value="" isHidden="true"></option>
            {
              _.map(mergeFields, (group, groupIndex) => {
                return (<optgroup key={'group-'+groupIndex} label={group.group}>
                  {
                    _.map(group.fields, (field, fieldIndex) => {
                      return <option key={'field-'+fieldIndex} className="merge-field-select-option" value={group.group + '.' + field.name}>{field.name}</option>
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
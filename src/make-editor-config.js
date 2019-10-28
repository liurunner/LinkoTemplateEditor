import React from "react";
import ReactDOM from "react-dom";
import MergeFieldSelector from './merge-field-selector';
import MergeFieldInput from './merge-field-input';

const defaultButtons = [
  "undo", "redo", "|", "bold", "strikethrough", "underline", "italic", "|", 
  "superscript", "subscript", "|", "align", "|", "ul", "ol", "outdent", "indent", "|", 
  "font", "fontsize", "brush", "paragraph", "|", "image", "link", "table", "|",
  "hr", "eraser", "copyformat", "|", "fullsize", "selectall", "print", "|", "source", "|"
];

const copyStringToClipboard = (str) => {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const makeCopyContentButton = () => {
  return {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function(editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    }
  };
}

const makeInsertMergeFieldsSelector = () => {  
  return {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor, current, self, close) => {
      let divElement = editor.create.div("merge-field-selector-popup");
      ReactDOM.render(<MergeFieldSelector editor={editor} close={close}/>, divElement);
      return divElement;
    }
  };
}

const makeInsertMergeFieldsInput = () => {  
  return {
    name: "insertMergeInput",
    tooltip: "Insert Merge Input",
    iconURL: "images/input_field.png",
    popup: (editor, current, self, close) => {
      let divElement = editor.create.div("merge-field-input-popup");
      ReactDOM.render(<MergeFieldInput editor={editor} close={close}/>, divElement);
      return divElement;
    }
  };
}

const makeEditorButtons = () => {
  var copyContentButton = makeCopyContentButton();
  var mergeFieldSelector = makeInsertMergeFieldsSelector();
  var mergeFieldInput = makeInsertMergeFieldsInput();
  return [...defaultButtons, copyContentButton, "|", mergeFieldSelector, "|", mergeFieldInput];
}

const makeEditorConfig = () => {
    return {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: "en",
    toolbarButtonSize: "medium",
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    //defaultActionOnPaste: "insert_clear_html",
    buttons: makeEditorButtons(),
    uploader: {
      insertImageAsBase64URI: true
    },
    width: 800,
    height: 842
  };
}

export default makeEditorConfig;
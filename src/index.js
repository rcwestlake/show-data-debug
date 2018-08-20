const $ = require('jquery')

const $editor = document.getElementById('editor')

const editor = CodeMirror.fromTextArea($editor, {
  lineNumbers: true,
  lineWrapping: true,
  mode: 'javascript',
  autofocus: true,
  tabSize: 2,
  theme: 'neat',
  matchBrackets: true,
  styleActiveLine: true,
  autoCloseBrackets: true,
  styleSelectedText: true,
  lineComment: true,
  toggleComment: true,
  blockComment: true,
  continueComment: true,
  lint: true,
  foldGutter: true
})
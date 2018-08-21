const editorRoot = document.getElementById('editor')

const editor = CodeMirror.fromTextArea(editorRoot, {
  lineNumbers: true,
  lineWrapping: true,
  mode: {
    name: 'javascript',
    json: true
  },
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

const d = debugModule.Database.makeSingleCall()
d.forEach((call, i) => {
  if(i === 0) {
    editor.setValue(JSON.stringify(...call.steps))
  } else {
    editor.replaceRange(JSON.stringify(call), CodeMirror.Pos(editor.lastLine()))
  }
})
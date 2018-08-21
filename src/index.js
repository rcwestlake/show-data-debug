const editorRoot = document.getElementById('editor')
const outputRoot = document.getElementById('data-output')

const d = debugModule.Database.makeMultipleCall(2)

if(Array(d) && d.length) {
  d.forEach((call, i) => {
    outputRoot.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(call, null, 2)
  })
} else {
  alert('Unable to get data.')
}

outputRoot.appendChild(document.createTextNode('hello'))

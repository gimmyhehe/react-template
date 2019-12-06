import './main.css'
require('./index.css')
var img = require('./assets/img/test.png')

var imgDom = new Image()
imgDom.src=img
document.body.appendChild(imgDom)
require('./bbb.js')
console.log('hello world11')
wahahah = ()=>{
  console.log('adsfasfd')
}
wahahah()

console.log('aaa'.includes('a'))

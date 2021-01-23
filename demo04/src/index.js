

const div= document.createElement('div')
const img = new Image()

img.src = require('./assets/images/test.png').default

div.appendChild(img)

document.body.appendChild(div)
const div = document.createElement('div')
const img = new Image()

img.src = require('./7.png').default

div.appendChild(img)

document.body.appendChild(div)

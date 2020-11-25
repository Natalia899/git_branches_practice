const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



const port = 3001
app.listen(port, function () {
    console.log(`Server is up and running smoothly`)
})

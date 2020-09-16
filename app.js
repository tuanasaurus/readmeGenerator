const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Readme Generator')
})

app.listen(3000);
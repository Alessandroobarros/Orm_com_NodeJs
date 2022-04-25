const express = require("express");
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/status', (req, res) => res
    .status(200)
    .send({message: 'welcome mann'}))

app.listen(port, () => console.log(`Server run on port ${port}`))

module.exports = app
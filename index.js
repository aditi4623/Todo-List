const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { ADD_TASK } = require('./20')
app.post('/', ADD_TASK)

app.listen(3001)
const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
var cors = require('cors')
app.use(cors())

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { ADD_TASK } = require('./20')
app.post('/', ADD_TASK)

const { DELETE_TASK } = require('./20')
app.delete('/', DELETE_TASK)

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port)
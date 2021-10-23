require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes');

app.use(bodyParser.json())

app.use('/', route)

const server = process.env.PORT || 5000
app.listen(server, () => {
    console.log(`The server is running at port: ${server}`);
}) 
const express = require('express');
const path = require('path');
const port = 8080;
const app = express();
require('dotenv').config({ path: __dirname + "/variables.env"});


const mailchimp_key = process.env.REACT_APP_MAILCHIMP_URL;


app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/build/index.html'))
});

app.listen(port);   
console.log("server started");






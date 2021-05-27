/*  
    server.js

    The entry point to our Node.js server.  This module uses Express to listen on port 80 for http requests
    and handles all routing.

    Body-Parser is used to parse body of PUT/POST/DELETE methods.
    
*/

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const https = require('https');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use( bodyParser.json());
app.use(router);

var options = {
    key: [fs.readFileSync(__dirname + '/../../certs/selfsigned.key')],
    cert: [fs.readFileSync(__dirname + '/../../certs/selfsigned.crt')]
}

const port = process.env.PORT || 80;
const server = app.listen(port, () => console.log(`Server listening on port: ${port}`));

const server2 = https.createServer(options, app);
server2.listen(443, () => console.log(`Server2 listening on port 443`));

module.exports = {server, server2};

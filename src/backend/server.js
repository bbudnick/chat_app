/*  
    server.js

    The entry point to our Node.js server.  This module uses Express to listen on port 80 for http requests
    and handles all routing.

    Body-Parser is used to parse body of PUT/POST/DELETE methods.
    
*/

const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes');
const app = express();

app.use(express.static('public'));
app.use( bodyParser.json());
// app.use(routes);

const port = process.env.PORT || 80;
const server = app.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = server;
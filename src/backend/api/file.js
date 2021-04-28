/* file.js
*
    Provides the file function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/file') to dbFile() which will connect 
    directly to the database service to add a file to a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbFile } = require('../db');

const file = async (request) => {
    if (request.file == undefined) { request.file = btoa("This is my test file"); }

    let result = await dbFile(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbFile failed', err) });

    return result;
};

module.exports = file;
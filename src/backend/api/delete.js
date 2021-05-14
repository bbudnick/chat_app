/* delete.js
*
    Provides the delete function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/delete') to dbDelete() which will connect 
    directly to the database service to delete a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbDelete } = require('../db');

const del = async (request) => {

    let result = await dbDelete(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbDelete failed', err) });

    return result;
};

module.exports = del;

/* update.js
*
    Provides the update function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/update') to dbUpdate() which will connect 
    directly to the database service to update a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbUpdate } = require('../db');

const update = async (request) => {

    let result = await dbUpdate(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbUpdate failed', err) });

    return result;
};

module.exports = update;
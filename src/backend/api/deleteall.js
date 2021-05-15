/* deleteAll.js
*
    Provides the deleteAll function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/deleteAll') to dbDeleteAll() which will connect 
    directly to the database service to delete all chat room records.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbDeleteAll } = require('../db');

const deleteAll = async (request) => {

    let result = await dbDeleteAll()
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbDeleteAll failed', err) });

    return result;
};

module.exports = deleteAll;

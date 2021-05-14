/* members.js
*
    Provides the members function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/members') to dbMembers() which will connect 
    directly to the database service to list all members of a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbMembers } = require('../db');

const members = async (request) => {

    let result = await dbMembers(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbMembers failed', err) });

    return result;
};

module.exports = members;

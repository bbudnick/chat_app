/* leave.js
*
    Provides the leave function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/leave') to dbLeave() which will connect 
    directly to the database service to delete a user from a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbLeave, dbChat } = require('../db');

const leave = async (request) => {
    let existing = await dbChat(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbChat failed', err) });

    let updatedRequest = {'id': request.id, 'users': existing[0].users.filter(user => user !== request.user)};
    let result = await dbLeave(updatedRequest)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbLeave failed', err) });

    return result;
};

module.exports = leave;

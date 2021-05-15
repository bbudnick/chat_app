/* join.js
*
    Provides the join function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/join') to dbJoin() which will connect 
    directly to the database service to add a new user to a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbJoin, dbChat } = require('../db');

const join = async (request) => {
    let existing = await dbChat(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbChat failed', err) });

    let updatedUsers = [];
    if (existing[0].users) {
        if (!existing[0].users.includes(request.user)) {
            updatedUsers = existing[0].users.concat([request.user]);
        } else {
            updatedUsers = existing[0].users;
        }
    } else {
        updatedUsers[0] = request.user;
    }

    let updatedRequest = {'id': request.id, 'users':updatedUsers};
    let result = await dbJoin(updatedRequest)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbJoin failed', err) });

    return result;
};

module.exports = join;

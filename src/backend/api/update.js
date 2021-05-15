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

const  { dbUpdate, dbChat } = require('../db');

const update = async (request) => {
    let existing = await dbChat(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbChat failed', err) });

    let updatedChat = [];
    if (existing[0].chat) {
        updatedChat = existing[0].chat.concat([request.chat]);
    } else {
        updatedChat[0] = request.chat;
    }

    let updatedRequest = {'id': request.id, 'chat': updatedChat };
    console.log(`updated request ${JSON.stringify(updatedRequest)}`);
    let result = await dbUpdate(updatedRequest)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbUpdate failed', err) });

    return result;
};

module.exports = update;

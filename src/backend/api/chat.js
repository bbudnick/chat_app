/* chat.js
*
    Provides the chat function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/chat') to dbChat() which will connect 
    directly to the database service to list all chat contents of a chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbChat } = require('../db');

const chat = async (request) => {

    let result = await dbChat(request)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbChat failed', err) });

    return result[0];
};

module.exports = chat;

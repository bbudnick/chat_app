/* create.js
*
    Provides the create function for the api module.  This is a wrapper layer
    that forwards incoming http requests from the routes module listeners to the db module
    which has individual functions to handle each type of request.

    Here we are forwarding from the parent router.post('/create') to dbCreate() which will connect 
    directly to the database service to insert a new chat room record.
    
    The async/await is critical here to handle latency between http requests as well as communicating
    with the db service.
    
*
*/

const  { dbCreate } = require('../db');

const create = async (users, title, chat) => {
    if (note == undefined) { chat = "This is my test chat room"; }

    let result = await dbCreate(users, title, chat)
    .then((res) => { return res; })
    .catch((err) => { return console.log('dbCreate failed', err) });

    return result;
};

module.exports = create;
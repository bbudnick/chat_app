/* index.js
*
    The entry point to the api module.  This simply collects all the api functions together and exports.
*
*/

const create = require('./create');
const list = require('./list');
const join = require('./join');
const leave = require('./leave'); 
const members = require('./members');
const update = require('./update');
const del = require('./delete');
const file = require('./file');
const chat = require('./chat');
const deleteAll = require('./deleteall');

module.exports = { create, list, join, leave, members, update, del, file, chat, deleteAll  };

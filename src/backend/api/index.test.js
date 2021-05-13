/* 
    index.test.js

    Jest tests for the api module.  In most of the tests, we rely on an exception by the target 
    function to indicate if the test should pass.

*/

const {create, list, join, leave, members, update, del, file, chat, deleteAll} = require('./index');

const users = ['Arthur Curry', 'Bruce Wayne', 'Alfred Pennyworth', 'Diana Prince'];
const newuser = 'Steppenwolf';
const olduser = 'Diana Prince';
const title = 'Justice League Chat';
const message1 = [{'user':users[0], 'message':'So let me get this straight.  You do it dressed like a bat? Like an actual bat?'}, {'user':users[1], 'message':'Worked for twenty years in Gotham.'}];
const message2 = {'user':users[0], 'message':'Oh, that s**thole.'};

describe('Test API round trip', () => {

    let newChatId = '';
    test('create test', async () => {
        let rc = true;
        try {
            let request = {'users':users, 'title':title};
            let results = await create(request);
            newChatId = results.insertedId;
        } catch (err) {
            console.log(`create failed`);
        }
        console.log("created: " + newChatId);
        expect(JSON.stringify(newChatId)).toMatch(/[a-z0-9]{20,30}/); // alphanumeric string between 20 and 30 chars
    });

    test('list test', async () => {
        let newRoom = '';
        try {
            let results = await list();
            newRoom = results.filter(item => JSON.stringify(item._id).includes(newChatId));
        } catch (err) {
            console.log(`list failed`);
        }
        expect(JSON.stringify(newRoom[0]._id)).toBe(JSON.stringify(newChatId));
    });

    test('join test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'users':users.concat([newuser])};
            // let request = {'id':newChatId, 'users':newuser};
            let results = await join(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`join failed`);
        }
        expect(modified).toBe(1);
    });

    test('members join test', async () => {
        let roomMembers = '';
        try {
            let request = {'id':newChatId};
            let results = await members(request);
            roomMembers = results.filter(item => JSON.stringify(item._id).includes(newChatId));
            console.log(`Members of ${roomMembers[0].title} \n ${roomMembers[0].users}`);
        } catch (err) {
            console.log(`members failed`);
        }
        expect(JSON.stringify(roomMembers[0].users)).toBe(JSON.stringify(users.concat([newuser])));
    });

    test('leave test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'users':users.filter(user => user !== olduser)};
            let results = await leave(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`leave failed`);
        }
        expect(modified).toBe(1);
    });
    
    test('members leave test', async () => {
        let roomMembers = '';
        try {
            let request = {'id':newChatId};
            let results = await members(request);
            roomMembers = results.filter(item => JSON.stringify(item._id).includes(newChatId));
            console.log(`Members of ${roomMembers[0].title} \n ${roomMembers[0].users}`);
        } catch (err) {
            console.log(`members failed`);
        }
        expect(JSON.stringify(roomMembers[0].users)).toBe(JSON.stringify(users.filter(user => user !== olduser)));
    });

    test('update test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'chat':message1};
            let results = await update(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`update failed`);
        }
        expect(modified).toBe(1);
    });   
    
    test('chat test', async () => {
        let newChat = '';
        try {
            let request = {'id':newChatId};
            let results = await chat(request);
            console.log(`Chat of ${results[0].title} \n ${JSON.stringify(results[0].chat)}`);
            newChat = results[0].chat;
        } catch (err) {
            console.log(`chat failed`);
        }
        expect(newChat).toStrictEqual(message1);
    });

    test('update concat test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'chat':message1.concat([message2])};
            let results = await update(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`update failed`);
        }
        expect(modified).toBe(1);
    }); 

    test('chat concat test', async () => {
        let newChat = '';
        try {
            let request = {'id':newChatId};
            let results = await chat(request);
            console.log(`Chat of ${results[0].title} \n ${JSON.stringify(results[0].chat)}`);
            newChat = results[0].chat;
        } catch (err) {
            console.log(`chat failed`);
        }
        expect(newChat).toStrictEqual(message1.concat([message2]));
    });

    test('delete test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId};
            let results = await del(request);
            modified = results.result.n;
            console.log(`deleted ${newChatId}`);
        } catch (err) {
            console.log(`delete failed`);
        }
        expect(modified).toBe(1);
    });

});

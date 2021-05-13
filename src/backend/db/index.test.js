/* 
    index.test.js

    Jest tests for the db module.  In most of the tests, we rely on an exception by the target 
    function to indicate if the test should pass.

*/

const {dbCreate, dbList, dbJoin, dbLeave, dbMembers, dbUpdate, dbDelete, dbFile, dbChat, dbDeleteAll} = require('./index');

const users = ['thor', 'tony stark', 'steve rogers', 'scott lang', 'hank pym', 'wanda maximoff'];
const newuser = 'natasha romanov';
const olduser = 'thor';
const title = 'Avengers Chat';
const message1 = [{'user':users[1], 'message':'Uh...Shakespeare in the Park? Doth Mother know you weareth her drapes?'}, {'user':users[0], 'message':'This is beyond you, metal man. Loki will face Asgardian justice.'}];
const message2 = {'user':users[2], 'message':'Dr. Banner! Now might be a good time to get angry.'};

describe('Test db API round trip', () => {

    let newChatId = '';
    test('dbCreate test', async () => {
        try {
            let request = {'users':users, 'title':title};
            let results = await dbCreate(request);
            newChatId = results.insertedId;
        } catch (err) {
            console.log(`dbCreate failed`);
        }
        console.log("created: " + newChatId);
        expect(JSON.stringify(newChatId)).toMatch(/[a-z0-9]{20,30}/); // alphanumeric string between 20 and 30 chars
    });

    test('dbList test', async () => {
        let newRoom = '';
        try {
            let results = await dbList();
            newRoom = results.filter(item => JSON.stringify(item._id).includes(newChatId));
        } catch (err) {
            console.log(`dbList failed`);
        }
        expect(JSON.stringify(newRoom[0]._id)).toBe(JSON.stringify(newChatId));
    });

    test('dbJoin test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'users':users.concat([newuser])};
            let results = await dbJoin(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`dbJoin failed`);
        }
        expect(modified).toBe(1);
    });

    test('dbMembers join test', async () => {
        let roomMembers = '';
        try {
            let request = {'id':newChatId};
            let results = await dbMembers(request);
            roomMembers = results.filter(item => JSON.stringify(item._id).includes(newChatId));
            console.log(`Members of ${roomMembers[0].title} \n ${roomMembers[0].users}`);
        } catch (err) {
            console.log(`dbMembers failed`);
        }
        expect(JSON.stringify(roomMembers[0].users)).toBe(JSON.stringify(users.concat([newuser])));
    });

    test('dbLeave test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'users':users.filter(user => user !== olduser)};
            let results = await dbLeave(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`dbLeave failed`);
        }
        expect(modified).toBe(1);
    });
    
    test('dbMembers leave test', async () => {
        let roomMembers = '';
        try {
            let request = {'id':newChatId};
            let results = await dbMembers(request);
            roomMembers = results.filter(item => JSON.stringify(item._id).includes(newChatId));
            console.log(`Members of ${roomMembers[0].title} \n ${roomMembers[0].users}`);
        } catch (err) {
            console.log(`dbMembers failed`);
        }
        expect(JSON.stringify(roomMembers[0].users)).toBe(JSON.stringify(users.filter(user => user !== olduser)));
    });

    test('dbUpdate test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'chat':message1};
            let results = await dbUpdate(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`dbUpdate failed`);
        }
        expect(modified).toBe(1);
    }); 

    test('dbChat test', async () => {
        let newChat = '';
        try {
            let request = {'id':newChatId};
            let results = await dbChat(request);
            console.log(`Chat of ${results[0].title} \n ${JSON.stringify(results[0].chat)}`);
            newChat = results[0].chat;
        } catch (err) {
            console.log(`dbChat failed`);
        }
        expect(newChat).toStrictEqual(message1);
    });

    test('dbUpdate concat test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId, 'chat':message1.concat([message2])};
            let results = await dbUpdate(request);
            modified = results.result.n;
        } catch (err) {
            console.log(`dbUpdate failed`);
        }
        expect(modified).toBe(1);
    }); 

    test('dbChat concat test', async () => {
        let newChat = '';
        try {
            let request = {'id':newChatId};
            let results = await dbChat(request);
            console.log(`Chat of ${results[0].title} \n ${JSON.stringify(results[0].chat)}`);
            newChat = results[0].chat;
        } catch (err) {
            console.log(`dbChat failed`);
        }
        expect(newChat).toStrictEqual(message1.concat([message2]));
    });

    test('dbDelete test', async () => {
        let modified = 0;
        try {
            let request = {'id':newChatId};
            let results = await dbDelete(request);
            modified = results.result.n;
            console.log(`deleted ${newChatId}`);
        } catch (err) {
            console.log(`dbDelete failed`);
        }
        expect(modified).toBe(1);
    });

});

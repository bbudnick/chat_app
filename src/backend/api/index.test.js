/* 
    index.test.js

    Jest tests for the api module.  In most of the tests, we rely on an exception by the target 
    function to indicate if the test should pass.

*/

const {create, list, join, leave, members, update, del, file, deleteAll} = require('./index');

const users = ['thor', 'tony stark', 'steve rogers', 'scott lang', 'hank pym', 'wanda maximoff'];
const title = 'Avengers Chat';
const myuser = 'natasha romanoff';
const chat = ['Uh...Shakespeare in the Park? "Doth Mother know you weareth her drapes?"', 'This is beyond you, metal man. Loki will face Asgardian justice.'];
const chat2 = 'Dr. Banner! Now might be a good time to get angry.'

describe('Test db API round trip', () => {

    let newChatId = '';
    test('create test', async () => {
        let rc = true;
        try {
            let request = {'users':users, 'title':title, 'chat':chat};
            let results = await create(request);
            newChatId = results.insertedId;
        } catch (err) {
            rc = false;
        }
        console.log("results: " + newChatId);
        expect( rc ).toBe(true);
    });

    test('list test', async () => {
        let rc = true;
        try {
            let results = await list();
            // console.log(`Chat rooms:`);
            // results.forEach(element => console.log(`${element._id}: ${element.title}`));
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('join test', async () => {
        let rc = true;
        try {
            let request = {'id':'6089a46b2bece4ab01b6f424', 'users':users.concat(['pepper potts'])};
            let results = await join(request);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('leave test', async () => {
        let rc = true;
        try {
            let request = {'id':'6089a4aafc0fbcab46f2e999', 'users':users.filter(user => user !== 'steve rogers')};
            let results = await leave(request);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });
    
    test('members test', async () => {
        let rc = true;
        try {
            let request = {'id':'6089a46b2bece4ab01b6f424'};
            let results = await members(request);
            console.log(`Members of ${results[0].title} \n ${results[0].users}`);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

    test('update test', async () => {
        let rc = true;
        try {
            let request = {'id':'6089b4ec417b0ab5c41c3fbb', 'chat':chat.concat([chat2])};
            let results = await update(request);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });    
    
    test('delete test', async () => {
        let rc = true;
        try {
            let request = {'id':newChatId};
            let results = await del(request);
        } catch (err) {
            rc = false;
        }
        expect( rc ).toBe(true);
    });

});

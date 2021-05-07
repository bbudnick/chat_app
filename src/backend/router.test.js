/* 
    routes.test.js

    Jest tests for routes module.  In most of the tests, the response code is checked as the expected result.

*/

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const supertest = require('supertest');

const app = express();
app.use( bodyParser.json());
app.use(router);

const users = ['thor', 'tony stark', 'steve rogers', 'scott lang', 'hank pym', 'wanda maximoff'];
const title = 'Avengers Chat';
const myuser = 'natasha romanoff';
const chat = ['Uh...Shakespeare in the Park? "Doth Mother know you weareth her drapes?"', 'This is beyond you, metal man. Loki will face Asgardian justice.'];
const chat2 = 'Dr. Banner! Now might be a good time to get angry.'

describe('Test router endpoint round trip', () => {
    let newChatId = '';

    test('/hello', async () => {
        const { body } = await supertest(app)
            .get('/hello')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /create test', async () => {
        let request = {'users':users, 'title':title, 'chat':chat};
        const {body} = await supertest(app)
            .post('/create')
            .send(request)
            .set('Accept', 'application/json');

        newChatId = body.insertedId;
        expect(body.result.ok).toBe(1);
    });

    test('GET /list test', async () => {
        const result = await supertest(app)
            .get('/list')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('PUT /join test', async () => {
        let request = {'id':'6089b50a5f3b14b5f308da7d', 'users':users.concat(['sam wilson'])};
        const result = await supertest(app)
            .put('/join')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);

    });

    test('PUT /leave test', async () => {
        let request = {'id':'6089b5617aa47ab64d191765', 'users':users.filter(user => user !== 'tony stark')};
        const result = await supertest(app)
            .put('/leave')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /members test', async () => {
        let request = {'id':'6089a46b2bece4ab01b6f424'};
        const result = await supertest(app)
            .post('/members')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('PUT /update test', async () => {
        let request = {'id':'6089b5e1333ef6b6d1ede6a1', 'chat':chat.concat(['These guys come from legend, Captain. Theyre basically Gods.'])};
        const result = await supertest(app)
            .put('/update')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('DELETE /delete test', async () => {
        let request = {'id':newChatId};
        const result = await supertest(app)
            .delete('/delete')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

});

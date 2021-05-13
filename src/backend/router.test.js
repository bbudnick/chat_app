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

const users = ['Charles Xavier', 'Logan', 'Jean Grey', 'Bobby'];
const newuser = 'Magneto';
const olduser = 'Jean Grey';
const title = 'X-Men Chat';
const message1 = [{'user':users[3], 'message':'Call me Iceman.'}, {'user':users[1], 'message':'Boyfriend?  So how do you guys...?'}];
const message2 = {'user':users[3], 'message':'Well, we\'re still working on that.'};

describe('Test router endpoint round trip', () => {
    let newChatId = '';

    test('/hello', async () => {
        const { body } = await supertest(app)
            .get('/hello')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /create test', async () => {
        let request = {'users':users, 'title':title};
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
        let request = {'id':newChatId, 'users':users.concat([newuser])};
        const result = await supertest(app)
            .put('/join')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);

    });

    test('POST /members join test', async () => {
        let request = {'id':newChatId};
        const result = await supertest(app)
            .post('/members')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('PUT /leave test', async () => {
        let request = {'id':newChatId, 'users':users.filter(user => user !== olduser)};
        const result = await supertest(app)
            .put('/leave')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /members leave test', async () => {
        let request = {'id':newChatId};
        const result = await supertest(app)
            .post('/members')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('PUT /update test', async () => {
        let request = {'id':newChatId, 'chat':message1};
        const result = await supertest(app)
            .put('/update')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('POST /chat test', async () => {
        let request = {'id':newChatId};
        const result = await supertest(app)
            .post('/chat')
            .send(request)
            .set('Accept', 'application/json')
            .expect(200);
    });    

    test('PUT /update test', async () => {
        let request = {'id':newChatId, 'chat':message1.concat([message2])};
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

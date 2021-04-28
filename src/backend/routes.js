/*
    routes.js

    The routes module which defines a separate route for all endpoints which the Express
    server is listening for.

    Each route is defined via the Express router object.  The http method needs to be provided
    in each case as well as the context path and callback to handle the request.  Note that the corresponding
    route will only respond to requests that matches both the method type AND the context path.

    Defining the callbacks as async and calling the downstream functions with await is critical here due 
    to the asynchronous nature of http request/responses.
    
*/

const express = require('express');
const api = require('./api');
const router = express.Router();
const path = require('path');

router.get('/hello', (req, res, next) => {
    res.json('World');
});

// router.get('/|about|contact', (req,res) => {
//     res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

router.post('/create', async (req, res) => {
    try {
        let response = await api.create(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/list', async (req, res) => {
    try {
        let response = await api.list();
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/join', async (req, res) => {
    try {
        let response = await api.join(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/leave', async (req, res) => {
    try {
        let response = await api.leave(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/members', async (req, res) => {
    try {
        let response = await api.members(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/update', async (req, res) => {
    try {
        let response = await api.update(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/delete', async (req, res) => {
    try {
        let response = await api.del(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/file', async (req, res) => {
    try {
        let response = await api.file(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/deleteAll', async (req, res) => {
    try {
        let response = await api.deleteAll(req.body);
        res.json(response);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;
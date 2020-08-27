const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const User = require('../model/Users');

router.get('/', async (req, res) => {
    try {
        console.log('get');
    } catch (error) {
        console.log(error);
        return res.json('');
    }
});

router.post('/post', async (req, res) => {
    try {
        console.log('post');
    } catch (error) {
        console.log(error);
        return res.json('');
    }
});

router.put('/put', async (req, res) => {
    try {
        console.log('put');
    } catch (error) {
        console.log(error);
        return res.json('');
    }
});

router.delete('/delete', async (req, res) => {
    try {
        console.log('delete');
    } catch (error) {
        console.log(error);
        return res.json('');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/register');
const { hashGenereator, hashValidator } = require('../counter/hashing');

router.post('/register', registerUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controller/login');
const {hashGenereator,hashValidator} = require('../counter/hashing');

//router.post('/login', loginUser);
router.post('/login', (req, res) => {
    res.send("Login successful");
    res.send(loginUser);
});


module.exports = router;
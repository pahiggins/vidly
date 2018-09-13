const express = require('express');
const router = express.Router();

const createReturn = require('../controllers/returns/createReturn');

const auth = require('../middleware/auth');

router.post('/', auth, createReturn);

module.exports = router;
const express = require('express');
const router = express.Router();

const fetchGenres = require('../controllers/genres/fetchGenres');
const fetchGenre = require('../controllers/genres/fetchGenre');
const createGenre = require('../controllers/genres/createGenre');
const editGenre = require('../controllers/genres/editGenre');
const deleteGenre = require('../controllers/genres/deleteGenre');
const asyncMiddleware = require('../middleware/async');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', asyncMiddleware(fetchGenres));

router.get('/:id', asyncMiddleware(fetchGenre));

router.post('/', auth, asyncMiddleware(createGenre));

router.put('/:id', auth, asyncMiddleware(editGenre));

router.delete('/:id', [auth, admin], asyncMiddleware(deleteGenre));

module.exports = router;
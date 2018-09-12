const express = require('express');
const router = express.Router();

const fetchGenres = require('../controllers/genres/fetchGenres');
const fetchGenre = require('../controllers/genres/fetchGenre');
const createGenre = require('../controllers/genres/createGenre');
const editGenre = require('../controllers/genres/editGenre');
const deleteGenre = require('../controllers/genres/deleteGenre');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validateObjectId = require('../middleware/validateObjectId');

router.get('/', fetchGenres);

router.get('/:id', validateObjectId, fetchGenre);

router.post('/', auth, createGenre);

router.put('/:id', auth, editGenre);

router.delete('/:id', [auth, admin], deleteGenre);

module.exports = router;
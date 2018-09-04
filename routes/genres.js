const express = require('express');
const router = express.Router();

const fetchGenres = require('../controllers/genres/fetchGenres');
const fetchGenre = require('../controllers/genres/fetchGenre');
const createGenre = require('../controllers/genres/createGenre');
const editGenre = require('../controllers/genres/editGenre');
const deleteGenre = require('../controllers/genres/deleteGenre');

router.get('/', fetchGenres);

router.get('/:id', fetchGenre);

router.post('/', createGenre);

router.put('/:id', editGenre);

router.delete('/:id', deleteGenre);

module.exports = router;
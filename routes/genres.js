const express = require('express');
const router = express.Router();

const fetchGenres = require('../controllers/fetchGenres');
const createGenre = require('../controllers/createGenre');
const editGenre = require('../controllers/editGenre');
const deleteGenre = require('../controllers/deleteGenre');

router.get('/', fetchGenres);

router.post('/', createGenre);

router.put('/:id', editGenre);

router.delete('/:id', deleteGenre);

module.exports = router;
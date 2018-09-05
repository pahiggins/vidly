const express = require('express');
const router = express.Router();

const fetchMovies = require('../controllers/movies/fetchMovies');
const fetchMovie = require('../controllers/movies/fetchMovie');
const createMovie = require('../controllers/movies/createMovie');
const editMovie = require('../controllers/movies/editMovie');
const deleteMovie = require('../controllers/movies/deleteMovie');

router.get('/', fetchMovies);

router.get('/:id', fetchMovie);

router.post('/', createMovie);

router.put('/:id', editMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
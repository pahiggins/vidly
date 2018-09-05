const Movie = require('../../data/movies');

async function fetchMovies(req, res) {
    const movies = await Movie.find().sort('title');
    res.send(movies);
}

module.exports = fetchMovies;
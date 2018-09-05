const Movie = require('../../data/movies');

async function fetchMovie(req, res) {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
        return res.status(404).send('Movie not found');
    }

    res.send(movie);
}

module.exports = fetchMovie;
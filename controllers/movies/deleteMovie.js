const Movie = require('../../data/movies');

async function deleteMovie(req, res) {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) {
        return res.status(404).send('Movie not found');
    }

    res.send(movie);
}

module.exports = deleteMovie;
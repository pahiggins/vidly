const Movie = require('../../data/movies');
const { Genre } = require('../../data/genres');
const validateGenre = require('../genres/validateGenre');
const validateMovie = require('./validateMovie');

async function editMovie(req, res) {
    const { error } = validateMovie(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const genre = await Genre.findById(req.body.genreId);

    if (!genre) {
        return res.status(400).send('Invalid genre');
    }

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    }, { new: true });


    if (!movie) {
        return res.status(404).send('Movie not found');
    }

    res.send(movie);
}

module.exports = editMovie;
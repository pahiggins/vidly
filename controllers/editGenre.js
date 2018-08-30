const genres = require('../data/genres');
const validateGenre = require('./validateGenre');

function editGenre(req, res) {
    const id = parseInt(req.params.id);
    const genre = genres.find(genre => genre.id === id);
    const { error } = validateGenre(req.body);

    if (!genre) {
        return res.status(404).send('Genre not found');
    }

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    genre.name = req.body.name;
    res.send(genre);
}

module.exports = editGenre;
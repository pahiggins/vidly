const genres = require('../data/genres');
const validateGenre = require('./validateGenre');

function createGenre(req, res) {
    const { error } = validateGenre(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
}

module.exports = createGenre;
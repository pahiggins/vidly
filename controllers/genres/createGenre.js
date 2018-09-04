const Genre = require('../../data/genres');
const validateGenre = require('./validateGenre');

async function createGenre(req, res) {
    const { error } = validateGenre(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let genre = new Genre({
        name: req.body.name
    });
    genre = await genre.save();

    res.send(genre);
}

module.exports = createGenre;
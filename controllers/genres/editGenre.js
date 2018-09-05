const { Genre } = require('../../data/genres');
const validateGenre = require('./validateGenre');

async function editGenre(req, res) {
    const { error } = validateGenre(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

    if (!genre) {
        return res.status(404).send('Genre not found');
    }

    res.send(genre);
}

module.exports = editGenre;
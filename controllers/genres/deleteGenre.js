const Genre = require('../../data/genres');

async function deleteGenre(req, res) {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) {
        return res.status(404).send('Genre not found');
    }

    res.send(genre);
}

module.exports = deleteGenre;
const genres = require('../data/genres');

function deleteGenre(req, res) {
    const id = parseInt(req.params.id);
    const genre = genres.find(genre => genre.id === id);

    if (!genre) {
        return res.status(404).send('Genre not found');
    }

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
}

module.exports = deleteGenre;
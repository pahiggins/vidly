const Genre = require('../data/genres');

async function fetchGenre(req, res) {
    const genre = await Genre.findById(req.params.id);

    if (!genre) {
        return res.status(404).send('Genre not found');
    }
    
    res.send(genre);
}

module.exports = fetchGenre;
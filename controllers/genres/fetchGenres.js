const Genre = require('../../data/genres');

async function fetchGenres(req, res) {
    const genres = await Genre.find().sort('name');
    res.send(genres);
}

module.exports = fetchGenres;
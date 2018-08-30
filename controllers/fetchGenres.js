const genres = require('../data/genres');

function fetchGenres(req, res) {
    res.send(genres);
}

module.exports = fetchGenres;
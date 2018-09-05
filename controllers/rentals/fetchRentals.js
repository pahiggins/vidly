const { Rental } = require('../../data/rentals');

async function fetchRentals(req, res) {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
}

module.exports = fetchRentals;
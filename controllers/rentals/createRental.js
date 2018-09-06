const mongoose = require('mongoose');
const Fawn = require('fawn');

const { Rental } = require('../../data/rentals');
const Customer = require('../../data/customers');
const Movie = require('../../data/movies');
const validateRental = require('./validateRental');

Fawn.init(mongoose);

async function createRental(req, res) {
    const { error } = validateRental(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) {
        return res.status(400).send('Invalid customer');
    }

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) {
        return res.status(400).send('Invalid movie');
    }

    if (movie.numberInStock === 0) {
        return res.status(400).send('Movie not in stock');
    }

    // TODO: Does this need to be let instead of const?
    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone,
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });

    try {
        new Fawn.Task()
            .save('rentals', rental)
            .update('movies', { _id: movie._id }, {
                $inc: { numberInStock: -1 }
            })
            .run();
    }
    catch(ex) {
        res.status(500).send('Something failed');
    }

    res.send(rental);
}

module.exports = createRental;
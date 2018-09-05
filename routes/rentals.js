const express = require('express');
const router = express.Router();

const fetchRentals = require('../controllers/rentals/fetchRentals');
// const fetchRental = require('../controllers/rentals/fetchRental');
// const createRental = require('../controllers/rentals/createRental');
// const editRental = require('../controllers/rentals/editRental');
// const deleteRental = require('../controllers/rentals/deleteRental');

router.get('/', fetchRentals);

// router.get('/:id', fetchRental);

// router.post('/', createRental);

// router.put('/:id', editRental);

// router.delete('/:id', deleteRental);

module.exports = router;
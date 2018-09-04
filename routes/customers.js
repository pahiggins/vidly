const express = require('express');
const router = express.Router();

const fetchCustomers = require('../controllers/customers/fetchCustomers');
const fetchCustomer = require('../controllers/customers/fetchCustomer');
const createCustomer = require('../controllers/customers/createCustomer');
const editCustomer = require('../controllers/customers/editCustomer');
const deleteCustomer = require('../controllers/customers/deleteCustomer');

router.get('/', fetchCustomers);

router.get('/:id', fetchCustomer);

router.post('/', createCustomer);

router.put('/:id', editCustomer);

router.delete('/:id', deleteCustomer);

module.exports = router;
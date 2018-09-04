const Customer = require('../../data/customers');

async function fetchCustomers(req, res) {
    const customers = await Customer.find().sort('name');
    res.send(customers);
}

module.exports = fetchCustomers;
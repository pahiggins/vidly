const Customer = require('../../data/customers');

async function fetchCustomer(req, res) {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
        return res.status(404).send('Customer not found');
    }

    res.send(customer);
}

module.exports = fetchCustomer;
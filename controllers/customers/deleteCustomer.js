const Customer = require('../../data/customers');

async function deleteCustomer(req, res) {
    const customer = await Customer.findByIdAndRemove(req.params.id);

    if (!customer) {
        return res.status(404).send('Customer not found');
    }

    res.send(customer);
}

module.exports = deleteCustomer;
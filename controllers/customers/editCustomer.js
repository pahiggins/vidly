const Customer = require('../../data/customers');
const validateCustomer = require('./validateCustomer');

async function editCustomer(req, res) {
    const { error } = validateCustomer(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    }, { new: true });


    if (!customer) {
        return res.status(404).send('Customer not found');
    }

    res.send(customer);
}

module.exports = editCustomer;
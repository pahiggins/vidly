const Customer = require('../../data/customers');
const validateCustomer = require('./validateCustomer');

async function createCustomer(req, res) {
    const { error } = validateCustomer(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();

    res.send(customer);
}

module.exports = createCustomer;
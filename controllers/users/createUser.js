const _ = require('lodash');

const { User } = require('../../data/users');
const validateUser = require('./validateUser');

async function createUser(req, res) {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('User already registered');
    }

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    await user.save();

    res.send(_.pick(user, ['_id', 'name', 'email']));
}

module.exports = createUser;
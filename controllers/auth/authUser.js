const _ = require('lodash');
const bcrypt = require('bcrypt');

const { User } = require('../../data/users');
const validateAuth = require('./validateAuth');

async function authUser(req, res) {
    const { error } = validateAuth(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Invalid email or password');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid email or password');
    }

    const token = user.generateAuthToken();

    res.send(token);
}

module.exports = authUser;
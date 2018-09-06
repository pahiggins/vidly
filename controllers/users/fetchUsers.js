const { User } = require('../../data/users');

async function fetchUsers(req, res) {
    const users = await User.find().sort('-name');
    res.send(users);
}

module.exports = fetchUsers;
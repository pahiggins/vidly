const { User } = require('../../data/users');

async function fetchUser(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send(user);
}

module.exports = fetchUser;
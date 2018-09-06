const express = require('express');
const router = express.Router();

const fetchUsers = require('../controllers/users/fetchUsers');
const fetchUser = require('../controllers/users/fetchUser');
const createUser = require('../controllers/users/createUser');
// const editUser = require('../controllers/users/editUser');
// const deleteUser = require('../controllers/users/deleteUser');

router.get('/', fetchUsers);

router.get('/:id', fetchUser);

router.post('/', createUser);

// router.put('/:id', editUser);

// router.delete('/:id', deleteUser);

module.exports = router;
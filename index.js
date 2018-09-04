const express = require('express');
const mongoose = require('mongoose');

const genres = require('./routes/genres');
const home = require('./routes/home');
const customers = require('./routes/customers');

const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use('/', home);
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}...`));
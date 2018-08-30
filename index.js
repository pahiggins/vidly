const express = require('express');

const fetchGenres = require('./controllers/fetchGenres');
const createGenre = require('./controllers/createGenre');
const editGenre = require('./controllers/editGenre');
const deleteGenre = require('./controllers/deleteGenre');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/genres', fetchGenres);

app.post('/api/genres', createGenre);

app.put('/api/genres/:id', editGenre);

app.delete('/api/genres/:id', deleteGenre);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}...`));
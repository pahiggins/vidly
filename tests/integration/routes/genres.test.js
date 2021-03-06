const request = require('supertest');

const { Genre } = require('../../../data/genres');
const { User } = require('../../../data/users');

let server;

describe('/api/genres', () => {
    beforeEach(() => {
        server = require('../../../index');
    });

    afterEach(async () => {
        // await server.close();
        await Genre.remove({});
    });

    describe('GET /', () => {
        test('should return all genres', async () => {
            await Genre.collection.insertMany([
                { name: 'genre1' },
                { name: 'genre2' }
            ]);

            const res = await request(server).get('/api/genres');

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
            expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();
        });
    });

    describe('GET /:id', () => {
        test('should return a genre if valid id is passed', async () => {
            const genre = new Genre({ name: 'Comedy' });
            await genre.save();

            const res = await request(server).get('/api/genres/' + genre._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('name', genre.name);
        });

        test('should return a 404 if invalid id is passed', async () => {
            const res = await request(server).get('/api/genres/1');

            expect(res.status).toBe(404);
        });
    });

    describe('POST /', () => {
        let token;
        let name;

        const exec = async () => {
            return await request(server)
                .post('/api/genres')
                .set('x-auth-token', token)
                .send({ name });
        }

        beforeEach(() => {
            token = new User().generateAuthToken();
            name = 'genre1';
        });

        test('should return a 401 if client is not logged in', async () => {
            token = '';

            const res = await exec();

            expect(res.status).toBe(401);
        });

        test('should return a 400 if genre is less than 5 characters', async () => {
            name = 'abcd';

            const res = await exec();

            expect(res.status).toBe(400);
        });

        test('should return a 400 if genre is more than 50 characters', async () => {
            name = new Array(52).join('a');

            const res = await exec();

            expect(res.status).toBe(400);
        });

        test('should save the genre if it is valid', async () => {
            const res = await exec();
            const genre = await Genre.find({ name: 'genre1' });

            expect(res.status).toBe(200);
            expect(genre).not.toBeNull();
        });

        test('should return the genre if it is valid', async () => {
            const res = await exec();

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('name', 'genre1');
        });
    });
});
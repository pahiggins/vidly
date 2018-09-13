const request = require('supertest');

const { User } = require('../../../data/users');
const { Genre } = require('../../../data/genres');

let server;

describe('auth middleware', () => {
    let token;

    beforeEach(() => server = require('../../../index'));
    beforeEach(() => {
        token = new User().generateAuthToken();
    });
    afterEach(async () => {
        await Genre.remove({});
        // await server.close();
    });

    const exec = () => {
        return request(server)
            .post('/api/genres')
            .set('x-auth-token', token)
            .send({ name: 'genre1' });
    };

    test('should return 401 if no token is provided', async () => {
        token = '';

        const res = await exec();

        expect(res.status).toBe(401);
    });

    test('should return 400 if invalid token is provided', async () => {
        token = 'a';

        const res = await exec();

        expect(res.status).toBe(400);
    });

    test('should return 200 if valid token is provided', async () => {
        const res = await exec();

        expect(res.status).toBe(200);
    });
});
require('dotenv').config();
const request = require('supertest');
const app = require('../app/app');
const securityQuestion = require('../app/models/securityQuestion');

const prepareDatabase = (model) => async () => await model.destroy({ where: {} });

/**
 * Interator
 * @param {*} init
 */
function* interation(init = 1) {
    let index = init;
    while (true) {
        yield index++;
    }
}
const iterator = interation(1);

const testJson = { question: 'test body' };
const testJsonUpdated = { question: 'test body updated' };
const testJsonDelete = () => {
    return { question: `Test body ${iterator.next().value}` };
};

dbPostEntryId = null;

// npx cross-env NODE_ENV=test jest tests/securityQuestions.test.js --testTimeout=10000 --runInBand --detectOpenHandles

describe('Security Question API', () => {
    beforeAll(prepareDatabase(securityQuestion));
    afterEach(prepareDatabase(securityQuestion));
    it('Can create a new question', async (done) => {
        const { body, statusCode } = await request(app)
            .post('/api/v1/securityquestion')
            .send(testJson);
        expect(statusCode).toEqual(201);
        expect(body).toHaveProperty('response');
        expect(body.response).toHaveProperty('message');
        expect(body.response).toHaveProperty('id');
        expect(body.response.message).toBe(`Security question ${body.response.id} was created.`);
        done();
    });
    it('Can return error if question parameter is missing', async (done) => {
        const { body, statusCode } = await request(app).post('/api/v1/securityquestion');
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`Missing paramater 'question' .`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
    it('Can list all questions', async (done) => {
        const secQuestion = await request(app).post('/api/v1/securityquestion').send(testJson);
        const { body, statusCode } = await request(app).get('/api/v1/securityquestion');
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response.rows).toStrictEqual([
            {
                id: secQuestion.body.response.id,
                question: testJson.question
            }
        ]);
        done();
    });
    it('Can list a question', async (done) => {
        const secQuestion = await request(app).post('/api/v1/securityquestion').send(testJson);
        const { body, statusCode } = await request(app).get(
            `/api/v1/securityquestion?id=${secQuestion.body.response.id}`
        );
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual({
            id: secQuestion.body.response.id,
            question: testJson.question
        });
        done();
    });
    it("Will return an error if the ID doesn't exist when trying to get a list of all questions", async (done) => {
        const { body, statusCode } = await request(app).get(`/api/v1/securityquestion?id=${1}`);
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`IDs [${1}] don't exist`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
    it('Can update a question', async (done) => {
        const secQuestion = await request(app).post('/api/v1/securityquestion').send(testJson);
        const { body, statusCode } = await request(app)
            .put(`/api/v1/securityquestion?id=${secQuestion.body.response.id}`)
            .send({
                question: testJsonUpdated.question,
                id: secQuestion.body.response.id
            });
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual([1]);
        done();
    });
    it('Can delete a question', async (done) => {
        const secQuestion = await request(app).post('/api/v1/securityquestion').send(testJson);
        const { body, statusCode } = await request(app).delete(`/api/v1/securityquestion`).send({
            id: secQuestion.body.response.id
        });
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual(`Question [${secQuestion.body.response.id}] deleted`);
        done();
    });
    it('Can delete a list of questions', async (done) => {
        console.log(testJsonDelete(), testJsonDelete(), testJsonDelete());
        const a = await request(app).post('/api/v1/securityquestion').send(testJsonDelete());
        const b = await request(app).post('/api/v1/securityquestion').send(testJsonDelete());
        const c = await request(app).post('/api/v1/securityquestion').send(testJsonDelete());
        const ids = [a.body.response.id, b.body.response.id, c.body.response.id];
        const { body, statusCode } = await request(app).delete(`/api/v1/securityquestion`).send({
            id: ids
        });
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual(`Question [${ids}] deleted`);
        done();
    });
    it("Will return an error if the ID doesn't exist when trying to delete", async (done) => {
        const { body, statusCode } = await request(app).delete(`/api/v1/securityquestion?id=${1}`);
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`IDs [${1}] don't exist`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
});

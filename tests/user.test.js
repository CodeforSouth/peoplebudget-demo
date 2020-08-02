require('dotenv').config();
const { hash } = require('../app/helpers/hash');
const request = require('supertest');
const app = require('../app/app');
const User = require('../app/models/user');
const Role = require('../app/models/role');

const prepareDatabase = (model) => async () => await model.destroy({ where: {} });

const testJson = {
    fname: 'test',
    lname: 'test',
    age: 25,
    budgetitem: 'Water fountains in park',
    email: 'test@test.com',
    pass: 'aPassword*!',
    recover: 'password',
    address1: 'a',
    address2: 'b',
    roleid: 1,
    securityQuestion: 'sec',
    linkedinurl: 'www.linkedn.com',
    image: 'test',
    zip: 33333,
    income: 60000,
    occupation: 'city planner'
};

dbPostEntryId = null;

// npx cross-env NODE_ENV=test jest tests/user.test.js --testTimeout=10000 --runInBand --detectOpenHandles

describe('Reply API', () => {
    beforeAll(async () => {
        await prepareDatabase(User);
        await Role.create({ role: 1 });
    });
    afterEach(prepareDatabase(User));
    it('Can create a new user', async (done) => {
        const { body, statusCode } = await request(app).post('/api/v1/user').send(testJson);
        expect(statusCode).toEqual(201);
        expect(body).toHaveProperty('response');
        expect(body.response).toBe('user created');
        done();
    });
    it("Can will fail to create new user without required field 'pass'", async (done) => {
        const testJosnWithoutPass = { ...testJson };
        delete testJosnWithoutPass.pass;
        const { body, statusCode } = await request(app)
            .post('/api/v1/user')
            .send(testJosnWithoutPass);
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe("Missing paramater 'pass' .");
        expect(body).toHaveProperty('type');
        expect(body.type).toBe('ClientError');
        done();
    });
    it('Gets all users', async (done) => {
        const user = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const output = {
            count: 1,
            rows: [
                {
                    id: user.id,
                    firstName: testJson.fname,
                    lastName: testJson.lname,
                    age: testJson.age,
                    budgetItem: testJson.budgetitem,
                    email: testJson.email,
                    linkedinurl: testJson.linkedinurl,
                    image: testJson.image,
                    zip: testJson.zip,
                    RoleId: testJson.roleid,
                    address1: testJson.address1,
                    address2: testJson.address2,
                    annualIncome: testJson.income,
                    occupation: testJson.occupation
                }
            ],
            maxPages: 1
        };
        const { body, statusCode } = await request(app).get('/api/v1/user');
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual(output);
        done();
    });
    it('Gets a user by id', async (done) => {
        const user = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const output = {
            id: user.id,
            firstName: testJson.fname,
            lastName: testJson.lname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            email: testJson.email,
            linkedinurl: testJson.linkedinurl,
            image: testJson.image,
            zip: testJson.zip,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        };
        const { body, statusCode } = await request(app).get(`/api/v1/user?id=${user.id}`);
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toStrictEqual(output);
        done();
    });
    it('Can update a user model', async (done) => {
        const user = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const testJosnWithNameChanged = { firstName: 'test2' };
        const { body, statusCode } = await request(app)
            .put(`/api/v1/user?id=${user.id}`)
            .send(testJosnWithNameChanged);
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toBe('user info updated');
        done();
    });
    it("Can should return an error when using an id that doesn't exist", async (done) => {
        await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const testJosnWithNameChanged = { firstName: 'testJson.fname' };
        const { body, statusCode } = await request(app)
            .put(`/api/v1/user?id=${0}`)
            .send(testJosnWithNameChanged);
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`Id ${0} not found or No changes were made`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
    it('Can delete a single user', async (done) => {
        const user = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const { body, statusCode } = await request(app)
            .delete(`/api/v1/user`)
            .send({ id: user.id });
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toBe(`User ${user.id} deleted`);
        done();
    });
    it('Can delete a list of users', async (done) => {
        const usera = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const userb = await User.create({
            email: testJson.email,
            lastName: testJson.lname,
            firstName: testJson.fname,
            age: testJson.age,
            budgetItem: testJson.budgetitem,
            hash: await hash(testJson.pass),
            recoveryHash: await hash(testJson.recover),
            securityQuestion: testJson.securityQuestion,
            image: testJson.image,
            RoleId: testJson.roleid,
            address1: testJson.address1,
            address2: testJson.address2,
            zip: testJson.zip,
            linkedinurl: testJson.linkedinurl,
            annualIncome: testJson.income,
            occupation: testJson.occupation
        });
        const idArr = [usera.id, userb.id];
        const { body, statusCode } = await request(app).delete(`/api/v1/user`).send({ id: idArr });
        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty('response');
        expect(body.response).toBe(`Users [${idArr.join(' , ')}] deleted`);
        done();
    });
    it("Can send error if ID doesn't exist.", async (done) => {
        const { body, statusCode } = await request(app).delete(`/api/v1/user`).send({ id: 0 });
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`ID ${0} doesn't exist`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
    it("Can send error if the array of IDs don't exist.", async (done) => {
        const { body, statusCode } = await request(app)
            .delete(`/api/v1/user`)
            .send({ id: [0, 1] });
        expect(statusCode).toEqual(400);
        expect(body).toHaveProperty('error');
        expect(body.error).toBe(`IDs [${[0, 1].join(' , ')}] don't exist`);
        expect(body).toHaveProperty('type');
        expect(body.type).toBe(`ClientError`);
        done();
    });
});

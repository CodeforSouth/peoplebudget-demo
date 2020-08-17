// imports
require('dotenv').config();
const app = require('express')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./controllers/router');
const cors = require('cors');
const corsOptions = { origin: 'http://localhost:3001', credentials: true };
const compression = require('compression');
const { errorHandler } = require('./middleware/error.handler');
// Swagger API documentation
// use NODE_ENV=dev to access at /api-doc
// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');
const swStats = require('swagger-stats');
const swaggerDocument = require('../swagger/swagger.json');
// Express middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));
if (!process.env.NODE_ENV === 'dev') app.use(compression());

(async () => {
    const { populateAuthLevels } = require('./database/database');
    process.AUTHLEVELS = await populateAuthLevels();
})();
app.use('/api', router);

if (process.env.NODE_ENV === 'dev') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(swStats.getMiddleware({ swaggerSpec: swaggerDocument }));
}
app.use(errorHandler);
module.exports = app;

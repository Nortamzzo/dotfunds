const routes = require('express').Router();

routes.use('/auth', require('./routes/auth.api'));
routes.use('/accounts', require('./routes/accounts.api'));
routes.use('/ledger', require('./routes/ledger.api'));
routes.use('/trans', require('./routes/trans.api'));

module.exports = routes;
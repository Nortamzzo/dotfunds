const trans = require('express').Router();
const { addTransaction } = require('../../components/trans/controllers/addTransaction');

trans.post('/addTransaction', (req, res) => {
    const data = req.body;
    const response = addTransaction(data);

})
module.exports = trans;
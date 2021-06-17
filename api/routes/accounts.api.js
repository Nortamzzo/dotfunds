const accounts = require('express').Router();
const { addAccount } = require('../../components/accounts/controllers/addAccount');
const { getAccounts } = require('../../components/accounts/controllers/getAccounts');

accounts.post('/addAccount', (req, res) => {
    const data = req.body;
    const response = addAccount(data);
    response
    .then(resData => console.log(resData))
    .then(resDataX => res.send(resDataX))
    .catch(err => console.log(err));
});

accounts.post('/getAccounts', (req, res) => {
    const data = req.body;
    const response = getAccounts(data.user_id);
    response
    .then(resData => res.send(resData))
    .catch(err => console.log(err));
})

module.exports = accounts;
const ledger = require('express').Router();
const { getLedgerByAccount } = require('../../components/ledger/controllers/getLedgerByAccount');
const { getLedger } = require('../../components/ledger/controllers/getLedger');

ledger.post('/getLedgerByAccount', (req, res) => {
    console.log(req.body)
    const data = req.body;
    const response = getLedgerByAccount(data.user_id, data.account_id);
    response
    .then(resData => res.send(resData))
    .catch(err => console.log(err));
})

ledger.post('/getLedger', (req, res) => {
    console.log(req.body)
    const data = req.body;
    const response = getLedger(data.user_id);
    response
    .then(resData => res.send(resData))
    .catch(err => console.log(err));
})
module.exports = ledger;
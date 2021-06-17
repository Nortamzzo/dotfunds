const data = require('../data/getLedgerByAccount.data');

exports.getLedgerByAccount = async (user_id, account_id) => {
    console.log(user_id, account_id)
    const ledger = await data.getLedgerAccount(user_id, account_id);

    if (!ledger) {
        let msg = "No transactions available";
        return msg;
    }

    console.log(ledger);
    return ledger;
}
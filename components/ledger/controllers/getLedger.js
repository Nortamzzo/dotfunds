const data = require('../data/getLedger.data');

exports.getLedger = async (user_id) => {
    const ledger = await data.getLedger(user_id);

    if (!ledger) {
        let msg = "No transactions available";
        return msg;
    }

    return ledger;
}
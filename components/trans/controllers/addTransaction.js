const data = require('../data/addTransaction.data');

exports.addTransaction = async (data) => {
    const transId = data.insertTrans(
        data.trans_date, 
        data.trans_amount, 
        data.trans_location,
        data.trans_info
    );

    if (!transId) return false;

    return data.insertLedger(data.trans_account, transId);
}
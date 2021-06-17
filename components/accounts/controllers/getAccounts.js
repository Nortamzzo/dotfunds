const data = require('../data/getAccounts.data');

exports.getAccounts = async (user_id) => {
    const accounts = data.getAccounts(user_id);

    if (!accounts) {
        let msg = "No accounts available";
        return msg;
    }
    
    return accounts;
}
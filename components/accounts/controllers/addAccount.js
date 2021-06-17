const acc = require('../data/addAccount.data');

exports.addAccount = async (data) => {
    console.log(data)
    if (await _accCheck(data.id, data.account)) {
        let msg = "Account already exists";
        return msg;
    } else {
        await _addNewAccount(data);
    }
    // const newAcc = await addNewAccount(data);
    // if (addNewAccount(data)) {
    //     console.log('account exists');
    // } else {
    //     console.log('no account');
    // }
}

async function _accCheck(uid, accName) {
    return acc.existCheck(uid, accName);
}

async function _addNewAccount(data) {
    return acc.insertAccount(data);
}
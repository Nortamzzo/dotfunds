const conn = require('../../../database').promise();

exports.existCheck = async (id, account) => {
    const query = `
        SELECT a.acc_name
        FROM accounts a
        JOIN user_accounts ua ON ua.account_id = a.id
        WHERE a.acc_name = ?
            AND ua.user_id = ?;
    `;
    const [result] = await conn.execute(query, [
        account,
        id
    ]);
    return (result.length > 0) ? true : false;
}

exports.insertAccount = async (data) => {
    const query = `
        INSERT INTO account
        (uid, accName, accStartBalance)
        VALUES
        ( ? , ? , ? );
    `;
    const [result] = await conn.execute(query, [
        data.uid,
        data.accName,
        data.accStartBalance
    ]);
    return (result.affectedRows > 0) ? true : false;
}
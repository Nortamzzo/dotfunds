const conn = require('../../../database').promise();

exports.getAccounts = async (user_id) => {
    const query = `
        SELECT a.id, a.acc_name
        FROM accounts a
        JOIN user_accounts ua ON ua.account_id = a.id
        WHERE ua.user_id = ?;
    `;
    const [result] = await conn.execute(query, [user_id]);
    console.log(result)
    return (result.length > 0) ? result : false;
}
const conn = require('../../../database').promise();

exports.getLedgerAccount = async (user_id, acct_id) => {
    const query = `
        SELECT a.acc_name, t.trans_date, t.trans_amount, t.trans_location, t.trans_info
        FROM accounts a
        JOIN user_accounts ua ON ua.account_id = a.id
        JOIN ledger l ON l.useraccount_id = ua.id
        JOIN trans t ON t.id = l.trans_id
        JOIN users u ON u.id = ua.user_id
        WHERE u.id = ?
            AND a.id = ?;    
    `;
    const [result] = await conn.execute(query, [user_id, acct_id]);
    return (result.length > 0) ? result : false;
}
const conn = require('../../../database').promise();

exports.getLedger = async (id) => {
    const query = `
        SELECT t.trans_date, a.acc_name, t.trans_amount, t.trans_location, t.trans_info
        FROM accounts a
        JOIN user_accounts ua ON ua.account_id = a.id
        JOIN ledger l ON l.useraccount_id = ua.id
        JOIN trans t ON t.id = l.trans_id
        JOIN users u ON u.id = ua.user_id
        WHERE u.id = ?
        ORDER BY t.trans_date DESC;    
    `;
    const [result] = await conn.execute(query, [id]);
    return (result.length > 0) ? result : false;
}
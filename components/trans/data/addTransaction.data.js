const conn = require('../../../database').promise();

exports.insertTrans = async (date, amount, location, info) => {
    const query = `
        INSERT INTO trans
        (
            trans_date,
            trans_amount, 
            trans_location, 
            trans_info
        )
        VALUES
        ( ? , ? , ? , ? );
    `;
    const [result] = await conn.execute(query, [
        date,
        amount,
        location,
        info
    ]);
    return (result.affectedRows === 1) ? result.insertId : false;
}

exports.insertLedger = async (accountId, transId) => {
    const query = `
        INSERT INTO ledger
        (
            useraccount_id,
            trans_id
        )
        VALUES
        ( ? , ? );
        `;
    const [result] = await conn.execute(query, [
        accountId,
        transId
    ]);
    return (result.affectedRows === 1) ? true : false;
}
const conn = require('../../../database').promise();
const bcrypt = require('bcryptjs');

exports.getUserId = async (email) => {
    const query = `
        SELECT id
        FROM users
        WHERE email = ?
        `;
    const [result] = await conn.execute(query, [
        email
    ]);
    return (result.length > 0) ? result[0].id : false;
}

exports.verifyPass = async (id, password) => {
    const query = `
        SELECT user_password
        FROM users
        WHERE id = ?
        `;
    const [result] = await conn.execute(query, [
        id
    ]);
    const passMatch = await bcrypt.compare(password, result[0].user_password);
    return (passMatch) ? true : false;
}

exports.getUserInfoById = async (id) => {
    const query = `
        SELECT *
        FROM users
        WHERE id = ?
    `;
    const [result] = await conn.execute(query, [id]);
    return (result.length > 0) ? result[0] : false;
}
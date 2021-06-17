const conn = require('../../../database').promise();
const bcrypt = require('bcryptjs');

exports.createAccount = async (data) => {
    console.log('creating account')
    const hashPass = await bcrypt.hash(data.password, 12);

    const query = `
        INSERT INTO users
        (first_name, last_name, email, user_password) 
        VALUES
        ( ?, ?, ?, ? )`;
    const [result] = await conn.execute(query, [
        data.firstname,
        data.lastname,
        data.email,
        hashPass
    ]);
    return (result.affectedRows > 0) ? true : false;
}

exports.checkIfEmailExists = async (email) => {
    const query = `
        SELECT email
        FROM users
        WHERE email = ?`;
    const [result] = await conn.execute(query, [
        email
    ]);
    let response = (result.length > 0) ? true : false;
    return response;
}
const auth = require('../data/signup.data')

exports.signup = async (data) => {
    const check = await auth.checkIfEmailExists(data.email);
    if (!check) {
        const newUser = await addUser(data);
        return newUser;
    } else {
        return false;
    }
}

async function addUser(data) {
    await auth.createAccount(data);
    console.log('New user added: ' + data.email)
}
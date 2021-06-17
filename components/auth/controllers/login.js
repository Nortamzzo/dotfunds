const loginData = require('../data/login.data');
const User = require('../../../models/user.model');
const jwt = require('jsonwebtoken');

exports.login = async (data) => {
    const id = await _getUserId(data.email);
    if (!id) return false;
    const verify = await _veryifyPassword(id, data.password);
    if (!verify) return false;
    const userData = await _getUserData(id);
    const curUser = new User(
        userData.id,
        userData.first_name, 
        userData.last_name, 
        userData.email
    );
    const Token = await _getToken(curUser);
    const userInfo = await _setUserInfo(curUser, Token);
    return userInfo;
}

async function _getToken(curUser) {
    const Token = jwt.sign({
        id: curUser.userId,
        firstname: curUser.firstname,
        lastname: curUser.lastname,
        email: curUser.email
    }, process.env.SECRET, {
        expiresIn: '48h'
    });
    return Token;
}

async function _setUserInfo(curUser, Token) {
    const userInfo = {
        UserId: curUser.id,
        FirstName: curUser.firstname,
        LastName: curUser.lastname,
        Email: curUser.email,
        token: Token,
        expiresIn: 48
    }
    return userInfo;
}

async function _getUserId(email) {
    return loginData.getUserId(email);
}

async function _veryifyPassword(id, password) {
    return loginData.verifyPass(id, password);
}

async function _getUserData(id) {
    return loginData.getUserInfoById(id);
}

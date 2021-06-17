const auth = require('express').Router();
const { login } = require('../../components/auth/controllers/login');
const { signup } = require('../../components/auth/controllers/signup');

auth.post('/login', (req, res) => {
    const data = req.body;
    const response = login(data);
    response
    .then(resData => res.send(resData));
})

auth.post('/signup', (req, res) => {
    const data = req.body;
    const response = signup(data);
    response
    .then(resData => res.send({resData}))
    .catch(err => console.log(err));
});


module.exports = auth;
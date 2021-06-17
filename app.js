const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const router = require('./api');

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`dotKIT listening on ${process.env.PORT}`)
});
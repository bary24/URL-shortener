const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(morgan('combined'));

module.exports = app;


const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const MONGO_URL = 'mongodb://localhost:27017/linkShortener';

async function connectMongo () {
  await mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB successfully.');
  }).catch((err) => {
    console.log('Something went wrong when connecting to MongoDB');
    console.log(err);
  });
}

module.exports = { connectMongo };

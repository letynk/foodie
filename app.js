const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const path = require('path');
// const Thing = require('./models/thing');

const app = express();

mongoose.connect('mongodb+srv://leticia:bueS3Pa10BRM2Vwo@cluster0-yx25j.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());

app.use('/api/sauces', sauceRoutes);

app.use('/api/auth', userRoutes);
module.exports = app;
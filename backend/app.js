const express = require('express');
const app = express();
const mongoose = require('mongoose')
const StuffRoutes = require('./routes/book')
const userRoutes = require('./routes/user')
const path = require('path');
require("dotenv").config({ path: ".env" });

// Connexion a MongoDB
mongoose.connect(process.env.DATABASE_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Authorization a toutes les requetes 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Création d'une application express
app.use(express.json())

//Routes 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/books', StuffRoutes)
app.use('/api/auth', userRoutes)

module.exports = app;
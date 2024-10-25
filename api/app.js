// import express
const express = require('express');

// import mongoose
const mongoose = require('mongoose');

// import dotenv
require('dotenv').config();
const p = process.env

// connect to the database
mongoose.connect(`${p.MONGODB_URL}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connect to MongoDB successful !'))
    .catch((error) => console.log('Connect to MongoDB failed !'));

// create an express app
const app = express();

// Middleware which intercept JSON data
app.use(express.json());

const taskRoutes = require('./routes/task')
const userRoutes = require('./routes/user');

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// simple middleware
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
})

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', userRoutes);

// export the express app
module.exports = app;
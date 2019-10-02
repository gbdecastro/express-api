const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Import Routes
const postRoute = require('./routes/post');
const authRoute = require('./routes/user');

//Middlewares
app.use(express.json());

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('connected to DB!');
    });

//Routes Middlewares
app.use('/api/post', postRoute);
app.use('/api/user', authRoute);

//How to we Start Listening to the server
app.listen(3000, () => console.log('Server Up and Running'));
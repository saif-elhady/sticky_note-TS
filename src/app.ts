import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

//express app
const app = express();

//Connect to DataBase
const dbURI: string = process.env.DB_URI || '';
mongoose.connect(dbURI)
    .then(() => app.listen(3000))
    .catch((err: Error) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.urlencoded({ extended: true }));


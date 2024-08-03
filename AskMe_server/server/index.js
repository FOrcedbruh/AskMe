const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const authRouter = require('./auth/authRouter');
const mongoose = require('mongoose');

const app = express();


// uses 

dotenv.config();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());



const PORT = process.env.PORT || 1234;

// routes

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send("Hello, its AskMe");
});

const db_url = process.env.DB_URL;


const start = async () => {
    try {
        mongoose.connect(db_url).then(() => {
            console.log('connected to db')
        })
        app.listen(PORT, () => {
            console.log(`server start on port: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
    
}


start();
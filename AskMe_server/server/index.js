const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const authRouter = require('./auth/authRouter');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const postsRouter = require('./posts.module/postsRouter');


const app = express();


// uses 

dotenv.config();

const origin = process.env.ORIGIN;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 1234;

// routes

app.use('/auth', authRouter);
app.use('/posts', postsRouter);

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
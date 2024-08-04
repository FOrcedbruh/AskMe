const express = require('express');
const controller = require('./postsController');
const protectRoute = require('./../middleware/protectRoute');


const postsRouter = express.Router();



postsRouter.post('/create', protectRoute,  controller.createPost);
postsRouter.get('/posts', protectRoute,  );
postsRouter.post('/post/:id', );




module.exports = postsRouter;

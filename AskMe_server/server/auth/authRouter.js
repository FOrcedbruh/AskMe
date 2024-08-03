const express = require('express');
const controller = require('./authController');
const authRouter = express.Router();



authRouter.post('/registration', controller.registration);
authRouter.post('/login', );
authRouter.post('/logout', );

module.exports = authRouter;
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const secret = require('./../utils/secret');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(400).json({
                message: 'You are not login'
            })
        }

        const decoded = jwt.verify(token, secret);

        if (!decoded) {
            return res.status(400).json({
                message: 'Invalid token'
            })
        }

        const user = await User.findById(decoded._id).select("-password");

        req.user = user;

        next();

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Server error'
        })
    }
}

module.exports = protectRoute;
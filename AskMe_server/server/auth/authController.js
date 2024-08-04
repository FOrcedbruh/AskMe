const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user');
const secret = require('./../utils/secret');

const generate_jwt = (res, _id) => {

    const payload = {
        _id
    };

    const token = jwt.sign(payload, secret, { expiresIn: '15d'});

    return res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 15 * 24 * 60 * 60 * 1000,
    });
}



class controller {
    async registration(req, res) {
        try {
            const { username, password, fullname, gender, email } = req.body;

            const candidate = await User.findOne({ username });

            if (candidate) {
                return res.status(400).json({
                    message: `user ${username} already exists`
                });
            }

            const hashPassord = bcrypt.hashSync(password, 6);

            const user = new User({
                username,
                email,
                password: hashPassord,
                fullname,
                gender
            });

            await user.save();

            await generate_jwt(res, user._id);


            return res.status(200).json({
                username: user.username,
                userId: user._id,
                email: user.email,
                gender: user.gender,
                fullname: user.fullname,
                avatar: user.avatar
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: 'Server error'
            });
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    message: `User with email ${email} does not exists`
                })
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({
                    message: 'Incorrect password'
                })
            }

            await generate_jwt(res, user._id);

            return res.status(200).json({
                username: user.username,
                userId: user._id,
                email: user.email,
                avatar: user.avatar
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: 'Server error'
            })
        }
    }
    async logout(req, res) {
        try {
            res.cookie('jwt', '', {
                maxAge: 0
            });

            return res.status(200).json({
                message: 'successfully logout'
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "Server error"
            })
        }
    }
}


module.exports = new controller();
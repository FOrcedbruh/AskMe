const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user');

const secret = process.env.JWT_SECRET;

const generate_jwt = (res, _id) => {

    const payload = {
        _id
    };

    const token = jwt.sign(payload, secret, { expiresIn: '15d'});

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: false
    });
}



class controller {
    async registration(req, res) {
        try {
            const { username, password, email } = req.body;

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
                password: hashPassord
            });

            await user.save();

            generate_jwt(res, user._id);


            return res.status(200).json({
                message: 'Successfull login'
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: 'Server error'
            });
        }
    }

}


module.exports = new controller();
const { Schema, model, default: mongoose} = require('mongoose');





const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    posts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Post',
            default: []
        }
    ]
});



module.exports = model('User', UserSchema);







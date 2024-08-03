const { Schema, model, default: mongoose} = require('mongoose');





const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});


module.exports = model('Post', PostSchema);
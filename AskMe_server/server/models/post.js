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
    images: [
        {
            type: String,
            default: []
        }
    ],
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


module.exports = model('Post', PostSchema);
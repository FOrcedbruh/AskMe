const User = require('./../models/user');
const Post = require('./../models/post');



class controller {
    async createPost(req, res) {
        try {
            const { title, text, images } = req.body;
            const _id = req.user._id;

            const user = await User.findById(_id);

            const newPost = new Post({
                title,
                text,
                images,
                author: _id
            });

            if (newPost) {
                user.posts.unshift(newPost._id);
            }

            await Promise.all([user.save(), newPost.save()]);


            return res.status(200).json({
                message: "Post successfully created"
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: "Server error"
            })
        }
    }
}

module.exports = new controller();
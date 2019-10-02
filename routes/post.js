const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verify = require('./verifyToken');

//GET ALL POSTS
router.get('/', verify, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//SUBMIT A POST
router.post('/', verify, async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

//GET SPECIFIC POST
router.get('/:postId', verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//DELETE A POST
router.delete('/:postId', verify, async (req, res) => {
    try {
        const removedPost = await Post.remove({
            _id: req.params.postId
        });
        res.json(removedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

//UPDATE A POST
router.patch('/:postId', verify, async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({
            message: err
        })
    }
});
module.exports = router;
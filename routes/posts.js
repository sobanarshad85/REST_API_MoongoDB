const router = require('express').Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log(posts)
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:postid', async (req, res) => {
    try {
        const posts = await Post.find({ _id: req.params.postid })
        res.send(posts)
    } catch (error) {
        console.log(error)
    }

})

router.put('/:postid', async (req, res) => {
    try {
        const posts = await Post.findByIdAndUpdate({ _id: req.params.postid },
            req.body, {
                new: true,
                runValidators: true
            })
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:postid', async (req, res) => {
    try {
        const posts = await Post.findByIdAndRemove({ _id: req.params.postid });
        res.send(posts)

    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const posts = new Post();
        posts.title = req.body.title;
        posts.content = req.body.content;
        await posts.save();
        res.send(posts);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
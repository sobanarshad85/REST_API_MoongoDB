const router = require('express').Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const Comment = mongoose.model('Comment')


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log(posts)
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
})

//Developed by Soban Arshad
//sobanarshad85@gmail.com
//+92 303 4645 060
//https://www.facebook.com/sobanarshad85
//https://www.twitter.com/sobanarshad85
//https://www.github.com/sobanarshad85
//https://www.linkedin.com/in/sobanarshad85

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

//Comments


router.post('/:postid/comment', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postid })
    //creat a comment
    const comment = new Comment();
    comment.content = req.body.content;
    comment.post = post._id
    await comment.save();
    //Associate post with comment
    post.comments.push(comment._id)
    await post.save();
    res.send(comment)
})

//read a comment
router.get('/:postid/comment', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postid }).populate("comments")
    res.send(post)
})

//edit the comment 

try {
    router.put("/comments/:commentid", async (req, res) => {
        const comment = await Comment.findOneAndUpdate(
            {
                _id: req.params.commentid
            },
            req.body,
            {
                new: true
            }
        )
        res.send(comment)
    })
} catch (error) {
    console.log(error)
}

//delete the comment
try {
    router.delete('/comment/:commentid', async (req, res) => {
        await Comment.findByIdAndRemove(req.params.commentid);
        res.send({ message: "comment successfully deleted" })
    })
} catch (error) {
    console.log(error)
}


module.exports = router;
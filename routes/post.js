const express = require('express');
const router = express.Router()

const Post = require('../models/Post')

router.get('/add', (req, res) => {
    res.render('posts/add')
})

//hien thi tat ca cac bai viet
router.get('/', async (req, res) => {
    const posts = await Post.find().lean().sort({date: -1})
    res.render('posts/index', {posts})
})

//tao post moi
router.post('/', async(req, res) => {
    const {title, text}= req.body;
    let errors = []
    if(!title) errors.push({msg: 'title require'})
    if(!text) errors.push({msg: 'text require'})
    if(errors.length > 0) res.render('posts/add',{title,text})
    else {
        const newPostData = {title, text}
        const newPost = new Post(newPostData)
        await newPost.save()
        res.redirect('/posts')
    }
})


router.get('/edit/:id' , async ( req, res) => {
    const post = await Post.findOne({_id: req.params.id}).lean()
    res.render('posts/edit', {post})
})

router.put('/:id', async(req, res) => {
    const {title, text} = req.body
    await Post.findOneAndUpdate({_id: req.params.id},{title, text})
    res.redirect('/posts')
})


router.delete('/:id', async(req, res) => {
    await Post.findOneAndRemove({_id: req.params.id})
    res.redirect('/posts')
})

module.exports = router
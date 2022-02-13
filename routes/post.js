const express = require('express');
const router = express.Router()

const Post = require('../models/Post')

router.get('/add', (req, res) => {
    res.render('posts/add')
})

module.exports = router
const express = require('express');
const router = express.Router()

const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.json('Day la post');
})

module.exports = router
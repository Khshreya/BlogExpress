const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', { blogs: blogs });  //
});


router.get('/blog', (req, res) => {
    res.render('blogHome', { blogs: blogs });
});


router.get('/blogpost/:slug', (req, res) => {
    console.log(req.params.slug);

    let myBlog = blogs.find(blog => blog.slug === req.params.slug);
    
    if (myBlog) {
        res.render('blogpage', {  
            title: myBlog.title,
            content: myBlog.content
        });
    } else {
        res.status(404).send('Blog not found');
    }

    console.log(myBlog);
});

module.exports = router;

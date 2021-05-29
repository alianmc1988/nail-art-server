const express = require('express');
const router = express.Router();

const blog = require('../controllers/blogControllers');

router.get('/', blog.getListBlogs);
router.get('/:id', blog.getSelectedBlog);
router.post('/', blog.createBlog);
router.put('/:id', blog.updateBlog);
router.delete('/:id', blog.deleteBlog);


module.exports = router;
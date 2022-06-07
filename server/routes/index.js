const express = require('express')
const router = express.Router()
const postController = require('../controller/postController')

router.post('/article', postController.addPostData)
router.get('/article/:limit/:offset', postController.getArticle)
router.get('/article/:id', postController.detailArticle)
router.put('/article/:id', postController.editArticle)
router.delete('/article/:id', postController.deleteArticle)

module.exports = router
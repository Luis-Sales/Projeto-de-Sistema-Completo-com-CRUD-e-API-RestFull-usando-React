const router = require('express').Router()

const PostsController = require("../Controller/posts")

/* router.get('/Titulos', (req, res) => {
	res.send({
	  ok:123
	})
}) */

router.get('/Posts/:id?', PostsController.get)
router.post('/Posts', PostsController.post)
router.put('/Posts/:id', PostsController.put)         // recebe id
router.delete('/Posts/:id', PostsController.remove)  // recebe id

module.exports = router
const authorController = require("../controller/author.controller")
const Author = require('../model/author.model')



module.exports = (app) => {
	app.get('/api', authorController.getAllAuthors)
	app.get('/api/:id', authorController.findOneAuthor) 
	app.post('/api', authorController.createAuthor)
	app.delete('/api/:id', authorController.deleteAuthor)
	app.put('/api/edit/:id', authorController.updateAuthor)
}
const { response, request } = require('express');
const Author = require('../model/author.model')

module.exports = {
	createAuthor: (request, response) => {
		Author.create(request.body)
			.then(author => response.json(author))
			.catch(err => response.status(400).json(err))
	},
	getAllAuthors: (request, response) => {
		Author.find({})
			.then( allAuthors => {
				console.log(allAuthors)
				response.json(allAuthors)
			})
			.catch((err)=> {
				console.log(err)
				response.json(err)
			})
},
	findOneAuthor: (request, response)=> {
		Author.findOne({_id:request.params.id})
			.then(author => response.json(author))
			.catch(err => response.status(400).json(err))
	},
	updateAuthor: (request, response) => {
		Author.findOneAndUpdate({_id: request.params._id}, request.body, {new: true, runValidators: true, useFindAndModify: false})
			.then(updatedAuthor => response.json(updatedAuthor))
			.catch(err=> response.json(err))
},
	deleteAuthor: (request, response) => {
		Author.deleteOne({_id: request.params.id})
			.then(deleteConfirmation => response.json(deleteConfirmation))
			.catch(err => response.json(err))
}

}
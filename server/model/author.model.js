const mongoose = require('mongoose')



const AuthorSchema = new mongoose.Schema({
	name: {
	type: String,
	required: [true, 'Must have a name!!'],
	minLength: [3, 'Must be more than 2 characthers!']
}
}, {timestamps : true})


module.exports = mongoose.model('Authors', AuthorSchema)
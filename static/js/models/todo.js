const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: String,
	order: Number,
	completed: Boolean
})

todoSchema.methods.toJSON = function () {
	return {
		id: this._id,
		completed: this.completed,
		order: this.order,
		title: this.title
	}
}

const Todo = mongoose.Model("Todo", todoSchema);

module.exports = Todo;

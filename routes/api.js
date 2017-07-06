const express = require("express");
const bodyParser = require("body-parser");
const validator = require("express-validator");

const router = express.Router();

router.use(bodyParser.json());

router.get("/todos", function(req, res) {
	Todo.find({}).then(function (todos) {
		res.json(todos.map(function (todo) {
			return makeJSONFromTodo(todo);
		}));
	});
});

	router.post("/todos", function(req, res) {
		const title = req.body.title,
		completed = req.body.completed,
		order = req.body.order;

					Todo.create({
						title: title,
						completed: completed,
						order: order
					}).then(function (todo) {
						res.status(201).json(todo.toJSON());
					})

	})

	router.get("/todos/:todoId", function (req, res) {
		const todoId = req.params.todoId;
		Todo.findById(todoId).then(function(todo) {
			res.json(todo.toJSON());
		})
	});

	router.put("/todos/:todoId", function (req, res) {
		const todoID = req.params.todoId;
		Todo.findById(todoId).then(function (todo) {
			todo.title = req.body.title;
			todo.completed = req.body.completed;
			todo.order = req.body.order;
			todo.save().then(function () {
				res.json(todo);
			})
		});
	});

module.exports = router;

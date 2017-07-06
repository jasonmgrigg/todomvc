const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const models = require('./models');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

mongoose.connect("mongodb://localhose:27017/todomvc");

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

app.use('/api', apiRouter);


// app.get('/todo', function(req, res) {
//   const todos = [
//     {
//       title: 'Return some JSON data',
//       complete: false
//     },
//     {
//       title: 'Make it an array',
//       complete: false
//     },
//     {
//       title: 'Celebrate with tacos',
//       complete: false
//     }
//   ]
//   res.json(todos);
//
// })// put routes here


// app.post('/', function(req, res){
//   var title = models.todo.build({
//     title: req.body.title
//   })
//   title.save();
//   res.redirect('/')
// })

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});

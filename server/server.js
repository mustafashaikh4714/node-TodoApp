var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const app = express();
app.use(bodyParser.json())  //this is express middleware.

app.post('/todos', (req, res) => {
var todo = new Todo({
    text: req.body.text
});

todo.save().then((doc) => {
  res.send(doc)
}, (err) => {
  res.status(400).send(err)
})
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});






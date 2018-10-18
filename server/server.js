var express = require('express');
var bodyParser = require('body-parser');

var {ObjectId} = require('mongodb')
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

app.get('/todos', (req, res) => {
Todo.find().then((todos) => {
  res.send({todos})
}, (e) => {
   res.status(400).send(e)
})
})

app.get('/todo/:id', (req, res) => {
 var id = req.params.id;

 //valid id using isvalid
  if(!ObjectId.isValid(id)) {
   return res.status(404).send('ID is not Valid');
  }
  Todo.findById({
    _id: id
}).then((todo) => {
    if(!todo){
    return res.status(404).send('ID is not Valid');
    }
    
  res.send({todo})
})
},(e) => {
console.log(e);

})

app.listen(3000, () => {
    console.log('Listening at port 3000');
});






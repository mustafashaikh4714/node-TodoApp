const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {ObjectId} = require('mongodb')
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate')

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

app.delete('/todo/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
     if(!todo) {
         res.status(400).send();
     }
     res.send(todo);
    })
}, (e) => {
    res.status(400).send(e);
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => { 
        if(!todo){
           return res.status(404).send();
        }
         res.send({todo});
    }).catch((e) => {
     return res.status(400).send(e);
    })
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

 
app.get('/users/me',authenticate, (req, res) => {
 res.send(req.user);
});

app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password).then((user) => {

    return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
    })
  }).catch((e) => {
     res.status(400).send(e);
  });
})

app.listen(3000, () => {
    console.log('Listening at port 3000');
});






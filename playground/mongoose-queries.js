
var {ObjectId} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

//validation
var id = '5bc80c62f3fc2a394ce3e3a8'
if(!ObjectId.isValid(id)){
    console.log('ID is not valid');
    
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
})

Todo.findById({
    _id: id
}).then((todo) => {
    if(!todo){
       return console.log('Todo not found');
    }
  console.log('Todo', todo); 
})
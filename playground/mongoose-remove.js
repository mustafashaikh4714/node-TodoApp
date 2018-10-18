
var {ObjectId} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

//remove todos 

//Remove All
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//findOneAndRemove

Todo.findOneAndRemove({
    text:'to do some work'
}).then((todo) => {
    console.log(todo);
    
})

//findByIdAndRemove

// Todo.findByIdAndRemove('5bc771ecdc2efd3194398065').then((todo) => {
// console.log(todo);
// })

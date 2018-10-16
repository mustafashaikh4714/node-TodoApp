const MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
if(err) {
    return console.log('Unable to connect MongoDb server');
}
console.log('Connected to mongoDb server');

// db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
// }, (err, result) => {
//     if(err) {
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
    
// });

db.collection('Users').insertOne({
    name: 'mustafa',
    age: 20,
    location: 'Nasik'
}, (err, result) => {
    if(err) {
        return console.log('Unable to Connect MongoDb server' + err);
    }
    console.log(JSON.stringify(result.ops));
})

db.close();
});
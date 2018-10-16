const MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
if(err) {
    return console.log('Unable to connect MongoDb server');
}
console.log('Connected to mongoDb server');

db.collection('Todos').find({completed: true}).toArray().then((docs) => {
console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));

}, (err) => {
    console.log('Unable to fetch Todos' + err);   
})

// db.close();
});
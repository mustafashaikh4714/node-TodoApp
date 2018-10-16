// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
if(err) {
    return console.log('Unable to connect MongoDb server');
}
console.log('Connected to mongoDb server');

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bc62dd692e6811a91f60ba4')
},{
    $set: {
        text: "Eat Mango"
    },
}, {
    returnOrigrnal: false
}).then((result) => {
    console.log(result);
    
})
// db.close();
});
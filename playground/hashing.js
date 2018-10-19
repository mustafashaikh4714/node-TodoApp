const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}
var token = jwt.sign(data, 'abc123');
console.log(token);


var decoded = jwt.verify(token, 'abc123')
console.log(decoded);



// var message = 'i am number 3';
// var hash = SHA256(message);

// console.log(`message: ${message} 
// hash: ${hash}`);


// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data) + 'secret').toString()
// }

//  token.data = 5;
//  token.hash = SHA256(JSON.stringify(token.data)).toString();
 
// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if(resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed, Do not trust!');
    
// }
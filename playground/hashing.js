const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = 'abc123';

// bcrypt.genSalt(10, (err, salt) =>{ 
// bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
// })
// })

var hashedPassword = '$2a$10$mLtwTLDg1LbOtu55lQKYO.Ty8mCBH99Hp7nmiIOLCFwiSTQjbDKs.'
bcrypt.compare('1223', hashedPassword, (err, result) => {
    console.log(result);
    
})
// var data = {
//     id: 10
// }
// var token = jwt.sign(data, 'abc123');
// console.log(token);


// var decoded = jwt.verify(token, 'abc123')
// console.log(decoded);



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
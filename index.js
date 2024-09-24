const bcrypt = require('bcryptjs');

const pass = bcrypt.hashSync('Test1234');
console.log(pass)

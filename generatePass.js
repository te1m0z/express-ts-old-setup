const bcrypt = require('bcrypt')

let hash = bcrypt.hashSync(process.env.DB_PASS, 5)

console.log(hash)
const { Pool } = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'roomly',
    password: 'fH1zWm9%z#jYB',
    database: 'roomlydb'
})

module.exports = pool
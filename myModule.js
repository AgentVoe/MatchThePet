const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'matchPet',
    password: 'admin',
    port: 5432,
})
export default client;
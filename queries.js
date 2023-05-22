const {request, response} = require("express");
const Pool  = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'matchPets',
    password: 'admin',
    port: 5432,
});


const getPets = (request, response) => {
    pool.query('select * from pets', (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getPetByParam = (request, response) => {
    const care = request.params.care;
    pool.query('select breed from pets where care = $1', [care], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const hey = () => {
    return 'HEY';
}

module.exports = {
    getPets,
    getPetByParam,
    hey
};

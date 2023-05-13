const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'matchPet',
    password: 'admin',
    port: 5432,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define an endpoint to retrieve pet data from database
app.get('/pets', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM pets');
        res.json(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

// Define an endpoint to add a new pet to the database
app.post('/pets', async (req, res) => {
    try {
        const { name, breed, age } = req.body;
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO pets (name, breed, age) VALUES ($1, $2, $3)',
            [name, breed, age]
        );
        res.status(201).json(result.rows[0]);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

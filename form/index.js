const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'matchPet',
    password: 'admin',
    port: 5432,
})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const petForm = document.getElementById('pet-form');

petForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(petForm);
    let data = {}
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    localStorage.setItem('data', JSON.stringify(data));
    window.location.href = '/MatchThePet/matches/index.html';
});


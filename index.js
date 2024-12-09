const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to HTTPS Server');
});

app.post('/', (req, res) => {
    const { firstname, lastname , email } = req.body;

        if (firstname && lastname && email) {
            res.send('Data Received');
        }
        else{
            res.send('Invaid Data');
        }
    });


app.listen(3000, () => {
    console.log('Web server is running on http://localhost:3000');
});
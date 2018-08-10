const express = require('express');
require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

const app = express();

app.get('/', (req, res) => {
    console.log('Received request');
    res.send('Sweet!');
});

app.listen(3000, () => console.log('listending on port 3000'));
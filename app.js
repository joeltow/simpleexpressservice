const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Sweet!'));

app.listen(3000, () => console.log('listending on port 3000'));
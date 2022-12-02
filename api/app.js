const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.status(200).send('GET request successful.'))

app.listen(port, () => console.log(`Server is listening on ${port}.`))

const express = require('express');
const app = express();
const port = 3100;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

const api = require('./service/api');
app.use(api);

// app.use('/', express.static('www'))

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
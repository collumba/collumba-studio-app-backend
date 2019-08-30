const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(bodyparser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://admin:admin@cluster0-3fdfu.mongodb.net/atmstudio?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

requireDir('./src/models');

app.get('/', (req, res) => {res.send(`Running...`)});
app.use('/api', require('./src/routes'));
app.get('*', (req, res) => {res.send(`ERROR 404`)});

app.listen(3001);
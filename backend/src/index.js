const express  = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());//Permite o uso do Request Body
app.use(routes)

app.listen(3333);
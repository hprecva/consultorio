const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());

const pacientesRoutes = require('./routes/pacientes');
app.use('/api/pacientes', pacientesRoutes);

module.exports =app;
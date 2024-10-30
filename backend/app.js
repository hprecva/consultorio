const express = require('express');
const app = express();

app.use(express.json());

const pacientesRoutes = require('./routes/pacientes');
app.use('/api/pacientes', pacientesRoutes);

module.exports =app;
const express = require('express');
const router = express.Router();
const Paciente = require('../models/pacientes');

router.get('/', async(req, res) => {
    try {
        const pacientes = await Paciente.getPacientes();
        res.json(pacientes);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener pacientes'});
    }
});

router.get('/:id', async(req, res) => {
    try {
        const paciente = await Paciente.getPacienteById(req.params.id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({error: 'Paciente no encontrado'});
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el paciente'});
    }
});

router.post('/', async(req, res) => {
    try {
        const nuevoPaciente = await Paciente.createPaciente(req.body);
        res.status(201).json(nuevoPaciente);
    } catch(err){
        res.status(500).json({error: 'Error al crear al paciente'});
    }
});

module.exports = router;
const db = require ('../bd/connection');

const getPacientes = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM pacientes', [], (err, rows) => {
            if(err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const getPacienteById = (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM pacientes WHERE id = ?', [id], (err, row) => {
            if(err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

const createPaciente = (paciente) => {
    const { nombre, apellido, fecha_nacimiento, telefono, email, direccion } = paciente;
    return new Promise ((resolve, reject) => {
        db.run(
            'INSERT INTO pacientes (nombre, apellido, fecha_nacimiento, telefono, email, direccion) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, fecha_nacimiento, telefono, email, direccion],
            function(err){
                if(err){
                    reject(err);
                } else {
                    resolve({id: this.lastID, ...paciente});
                }
            }
        );
    });
};

module.exports = {
    getPacientes,
    getPacienteById,
    createPaciente
};
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const config = require('../config');

const dbPath = path.resolve(__dirname, config.dbPath);
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = db;
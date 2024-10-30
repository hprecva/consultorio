const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite3');
const db = new sqlite3.Database(dbPath);

const initScript = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf-8');
db.exec(initScript, (err) => {
    if (err){
        console.error('Error al crear las tablas', err.message);
    } else {
        console.log ('Tablas creadas exisosamente');
    }
    db.close();
});

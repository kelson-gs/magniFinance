const db = require('../db/db');

const Notas = db.Sequelize.define('notas',{
    nota: {
        type: db.Sequelize.FLOAT
    }
});

Notas.sync({ force: true });
module.exports = Notas;
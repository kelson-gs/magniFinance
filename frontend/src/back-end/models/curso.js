const db = require('../db/db');

const Curso = db.Sequelize.define('curso',{
    name: {
        type: db.Sequelize.STRING
    }
});

Curso.sync({ force: true });
module.exports = Curso;
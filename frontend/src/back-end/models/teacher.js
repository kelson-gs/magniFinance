const db = require('../db/db');

const Teacher = db.Sequelize.define('teacher',{
    name: {
        type: db.Sequelize.STRING
    },
    birthday: {
        type: db.Sequelize.STRING
    },
    salary: {
        type: db.Sequelize.INTEGER
    }
});

Teacher.sync({ force: true });
module.exports = Teacher;
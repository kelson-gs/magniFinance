const db = require('../db/db');

const Student = db.Sequelize.define('student',{
    name: {
        type: db.Sequelize.STRING
    },
    birthday: {
        type: db.Sequelize.STRING
    }
});

Student.sync({ force: true });
module.exports = Student;
const db = require('../db/db');

const Subject = db.Sequelize.define('subject',{
    name: {
        type: db.Sequelize.STRING
    }
});

Subject.sync({ force: true });
module.exports = Subject;
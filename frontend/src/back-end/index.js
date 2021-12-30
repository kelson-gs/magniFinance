const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');


// habilitando o cors na aplicação
app.use(cors());


// configurando body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// chamando rotas
    require('./controller/getCollege')(app);
    require('./controller/postCollege')(app);
    require('./controller/updateCollege')(app);
    require('./controller/deleteCollege')(app);

app.listen(8081, () => {
    console.log('Server connected!');
});
const express = require('express');
const router = express.Router();

const Teacher = require('../../models/teacher');
const Curso = require('../../models/curso');
const Subject = require('../../models/subjects');
const Student = require('../../models/students');
const Notas = require('../../models/notas');

router.get('/allTeacher', (req, res) => {
    Teacher.findAll().then((teachers) => {
        console.log(teachers);
        res.send({allteachers: teachers});
    }).catch( err => console.log(err) )
})

router.get('/onlyTeacher/:id', (req, res) => {
    const { id } = req.params;
    console.log('nome params: ', id);
    Teacher.findOne({
        where: {
            id: id
        }
    }).then( teacher => {
        res.send({ onlyTeacher: teacher })
    } ).catch( err => console.log(err) );
});

router.get('/allCurso', (req, res) => {
    Curso.findAll().then((cursos) => {
        console.log(cursos);
        res.send({allcursos: cursos});
    }).catch( err => console.log(err) )
})

router.get('/onlyCurso/:id', (req, res) => {
    const { id } = req.params;
    console.log('nome params: ', id);
    Curso.findOne({
        where: {
            id: id
        }
    }).then( curso => {
        res.send({ onlycurso: curso })
    } ).catch( err => console.log(err) );
});

router.get('/allSubject', (req, res) => {
    Subject.findAll().then((subjects) => {
        console.log(subjects);
        res.send({allsubjects: subjects});
    }).catch( err => console.log(err) )
})

router.get('/onlySubject/:id', (req, res) => {
    const { id } = req.params;
    console.log('nome params: ', id);
    Subject.findOne({
        where: {
            id: id
        }
    }).then( subject => {
        res.send({ onlysubject: subject })
    } ).catch( err => console.log(err) );
});

router.get('/allStudent', (req, res) => {
    Student.findAll().then((students) => {
        console.log(students);
        res.send({allstudents: students});
    }).catch( err => console.log(err) )
})

router.get('/onlyStudent/:id', (req, res) => {
    const { id } = req.params;
    console.log('nome params: ', id);
    Student.findOne({
        where: {
            id: id
        }
    }).then( student => {
        res.send({ onlystudent: student })
    } ).catch( err => console.log(err) );
});

router.get('/allNotas', (req, res) => {
    Notas.findAll().then((notas) => {
        console.log(notas);
        res.send({allnotas: notas});
    }).catch( err => console.log(err) );
})

router.get('/onlyNotas/:id', (req, res) => {
    const { id } = req.params;
    console.log('nome params: ', id);
    Notas.findOne({
        where: {
            id: id
        }
    }).then( nota => {
        res.send({ onlynota: nota })
    } ).catch( err => console.log(err) );
});

module.exports = app => app.use('/getCollege', router);
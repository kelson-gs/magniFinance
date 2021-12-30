const express = require('express');
const router = express.Router();

const Teacher = require('../../models/teacher');
const Curso = require('../../models/curso');
const Subject = require('../../models/subjects');
const Student = require('../../models/students');
const Notas = require('../../models/notas');

router.put('/updateTeacher/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, birthday, salary } = req.body;

    Teacher.update({
        name: name,
        birthday: birthday,
        salary: salary
    },{
        where: {
            id: id
        }
    })
    .then(() => res.send('Teacher update !!'))
    .catch(next);
})


router.put('/updateCurso/:id', (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    Curso.update({
        name: name,
    },{
        where: {
            id: id
        }
    })
    .then(() => res.send('Curso update !!'))
    .catch(next);
})


router.put('/updateSubject/id', (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    Subject.update({
        name: name,
        
    },{
        where: {
            id: id
        }
    })
    .then(() => res.send('Subject update !!'))
    .catch(next);
})


router.put('/updateStudent/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, birthday } = req.body;

    Student.update({
        name: name,
        birthday: birthday,
    },{
        where: {
            id: id
        }
    })
    .then(() => res.send('Student update !!'))
    .catch(next);
})


router.put('/updateNotas/:id', (req, res, next) => {
    const { id } = req.params;
    const { nota} = req.body;

    Notas.update({
        nota: nota,
    },{
        where: {
            id: id
        }
    })
    .then(() => res.send('Nota update !!'))
    .catch(next);
})



module.exports = app => app.use('/putCollege', router);
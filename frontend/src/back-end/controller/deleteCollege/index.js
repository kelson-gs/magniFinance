const express = require('express');
const router = express.Router();

const Teacher = require('../../models/teacher');
const Curso = require('../../models/curso');
const Subject = require('../../models/subjects');
const Student = require('../../models/students');
const Notas = require('../../models/notas');

router.delete('/deleteTeacher/:id', (req, res, next) => {
    Teacher.findByPk(id).then((el) => {
        Teacher.destroy({
            where: {
                id: el.id
            }
        })
    })
    .then(() => {
        res.send('Teacher deleted!!');
    })
    .catch(err => console.log(err));
})


router.delete('/deleteCurso', (req, res, next) => {
    Curso.findByPk(id).then((el) => {
        Curso.destroy({
            where: {
                id: el.id
            }
        })
    })
    .then(() => {
        
        res.send('Curso deleted!!');
    })
    .catch(err => console.log(err));
})


router.delete('/deleteSubject', (req, res, next) => {
    Subject.findByPk(id).then((el) => {
        Subject.destroy({
            where: {
                id: el.id
            }
        })
    })
    .then(() => {
        
        res.send('Subject deleted!!');
    })
    .catch(err => console.log(err));
})


router.delete('/deleteStudent', (req, res, next) => {
    Student.findByPk(id).then((el) => {
        Student.destroy({
            where: {
                id: el.id
            }
        })
    })
    .then(() => {
        
        res.send('Student deleted!!');
    })
    .catch(err => console.log(err));
})


router.delete('/deleteNotas', (req, res, next) => {
    Notas.findByPk(id).then((el) => {
        Notas.destroy({
            where: {
                id: el.id
            }
        })
    })
    .then(() => {
        res.send('Notas deleted!!');
    })
    .catch(err => console.log(err));
})



module.exports = app => app.use('/deleteCollege', router);
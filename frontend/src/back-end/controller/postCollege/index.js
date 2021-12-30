const express = require('express');
const router = express.Router();

const Teacher = require('../../models/teacher');
const Curso = require('../../models/curso');
const Subject = require('../../models/subjects');
const Student = require('../../models/students');
const Notas = require('../../models/notas');

router.post('/registerTeacher', (req, res) => {
    const { name, birthday, salary } = req.body;

    try{
        Teacher.create({
            name: name,
            birthday: birthday,
            salary: salary
        })

        res.json({
            name: name,
            birthday: birthday,
            salary: salary
        })
    }catch (err) {
        console.log(err);
        res.status(400);
    }
})


router.post('/registerCurso', (req, res) => {
    const { name } = req.body;

    try{
        Curso.create({
            name: name,
        })

        res.json({
            name: name,
        })
    }catch (err) {
        console.log(err);
        res.status(400);
    }
})


router.post('/registerSubject', (req, res) => {
    const { name } = req.body;

    try{
        Subject.create({
            name: name,
            
        })

        res.json({
            name: name,
        })
    }catch (err) {
        console.log(err);
        res.status(400);
    }
})


router.post('/registerStudent', (req, res) => {
    const { name, birthday } = req.body;

    try{
        Student.create({
            name: name,
            birthday: birthday,
            
        })

        res.json({
            name: name,
            birthday: birthday,
           
        })
    }catch (err) {
        console.log(err);
        res.status(400);
    }
})


router.post('/registerNotas', (req, res) => {
    const { nota } = req.body;

    try{
        Notas.create({
            nota: nota,
        })

        res.json({
            nota: nota,
        })
    }catch (err) {
        console.log(err);
        res.status(400);
    }
})



module.exports = app => app.use('/postCollege', router);
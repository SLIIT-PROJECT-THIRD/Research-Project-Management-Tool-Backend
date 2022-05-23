/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, getAllStudents, getById, update, deleteById } = require('../controller/Student');

//Controller Routes
router.post('/', create);
router.get('/', getAllStudents);
router.get('/:id', getById);
router.patch('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;
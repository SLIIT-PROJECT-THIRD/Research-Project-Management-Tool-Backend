/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, getAllStudents } = require('../controller/Student');

//Controller Routes
router.post('/', create);
router.get('/', getAllStudents);

module.exports = router;
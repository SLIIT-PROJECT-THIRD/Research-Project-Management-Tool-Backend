/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create } = require('../controller/Group');

//Controller Routes
router.post('/', create);

module.exports = router;
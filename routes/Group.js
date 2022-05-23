/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, getAllGroups, getById, update } = require('../controller/Group');

//Controller Routes
router.post('/', create);

router.get('/', getAllGroups);
router.get('/:id', getById);

router.patch('/:id', update);

module.exports = router;
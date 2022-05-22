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
router.get('/:_id', getById);

router.patch('/:_id', update);

module.exports = router;
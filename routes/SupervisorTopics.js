const express = require('express');
const router = express.Router();

const { getAllGroups ,getById} = require('../controller/SupervisorTopics');

//Controller Routes
router.get('/', getAllGroups);
router.get('/:id', getById);

module.exports = router;
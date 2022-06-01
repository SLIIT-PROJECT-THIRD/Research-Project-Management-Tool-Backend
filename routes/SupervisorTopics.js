const express = require('express');
const router = express.Router();

const { getAllGroups } = require('../controller/SupervisorTopics');

//Controller Routes
router.get('/', getAllGroups);

module.exports = router;
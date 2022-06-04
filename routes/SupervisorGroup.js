/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, getAllSupervisorsAndCoSupervisors, getById, getByGroupId, getBySupervisorId, getByCoSupervisorId, getByStatus, update, deleteById } = require('../controller/SupervisorGroup');

//Controller Routes
router.post('/', create);
router.get('/', getAllSupervisorsAndCoSupervisors);
router.get('/:id', getById);
router.get('/getByGroupId/:id', getByGroupId);
router.get('/getBySupervisorId/:id', getBySupervisorId);
router.get('/getByCoSupervisorId/:id', getByCoSupervisorId);
router.get('/getByStatus/:id', getByStatus);
router.patch('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;
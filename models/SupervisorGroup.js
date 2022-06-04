
/*
    Created by - Isuru Pathum Herath
    On - 03/06/2022
    Description - Supervisor Model
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const SupervisorSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true,
        unique: true
    },
    supervisorId: {
        type: String,
        required: true
    },
    coSupervisorId: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Supervisor', SupervisorSchema);
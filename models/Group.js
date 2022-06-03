
/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Group Model
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const GroupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    groupLeader: {
        type: String,
        required: true,
        unique: true
    },
    firstMember: {
        type: String,
        required: true,
        unique: true
    },
    secondMember: {
        type: String,
        required: true,
        unique: true
    },
    thirdMember: {
        type: String,
        required: true,
        unique: true
    },
    groupTopic: {
        type: String,
        required: true
    },
    groupEmail: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
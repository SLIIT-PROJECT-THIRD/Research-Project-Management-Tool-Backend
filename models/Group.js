
/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Group Model
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const GroupSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true,
        unique: true
    },
    groupName: {
        type: String,
        required: true,
        unique: true
    },
    groupEmail: {
        type: String,
        required: true
    },
    groupMembers: {
        type: Array
    }
}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
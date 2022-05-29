
/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Student Model
 */

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    sliitId: {
        type: String,
        required: true,
        unique: true
    },
    sliitEmail: {
        type: String,
        required: true,
        unique: true
    },
    personalEmail: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: String,
        required: true,
        unique: true
    },
    studentType: {
        type: String,
        required: true //repeat, prorata, regular
    },
    groupStatus: {
        type: Boolean,
        required: true //Group have - YES | NO -->  TRUE | FALSE
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
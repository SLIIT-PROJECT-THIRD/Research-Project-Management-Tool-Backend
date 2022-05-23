
/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Student Model
 */

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    sliitId: {
        type: String,
        required: true
    },
    sliitEmail: {
        type: String,
        required: true
    },
    personalEmail: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    studentType: {
        type: String,
        required: true //repeat, prorata, regular
    },
    groupStatus: {
        type: Boolean,
        required: true //Group have - YES | NO -->  TRUE | FALSE
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
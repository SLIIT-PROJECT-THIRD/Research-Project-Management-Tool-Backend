/*
Created by = samuditha jayawardena
on - 8/05/2022
desc - admin model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
    Submission_Topic:{
        type: String,
        required: true
    },
    Deadline:{
        type:Date,
        required: true
    },
    Description:{
        type:String,
        required: false
    },
    avatar:{
        type: String
    }

},{timestamps: true},
{collection: 'admin'
});

module.exports = mongoose.model('Admin_st', AdminSchema);
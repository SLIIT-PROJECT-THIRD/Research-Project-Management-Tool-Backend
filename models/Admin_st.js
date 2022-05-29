/*
Created by = samuditha jayawardena
on - 8/05/2022
desc - admin model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminSchema = new Schema({
    Submission_Topic:{
        type: String
    },
    Deadline:{
        type: Date
    },
    Description:{
        type: String
    },

},{timestamps: true} ,{
    collection:  'admin_sts'
} )

module.exports = mongoose.model('Admin_st', AdminSchema);
/*
Created by = samuditha jayawardena
on - 8/05/2022
desc - admin model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PanelMemberSchema = new Schema({
    Panel_Member_Name:{
        type: String
    },
    Panel_Member_Email:{
        type: String
    },
    Group_Name:{
        type: String
    },
    Group_email:{
        type: String
    },

},{timestamps: true} ,{
    collection:  'allocatepanelmember'
} )

module.exports = mongoose.model('allocatepanelmember', PanelMemberSchema);
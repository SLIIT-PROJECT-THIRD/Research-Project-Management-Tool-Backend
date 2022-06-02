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
    Groups:[
        {
        group1: String,
        group2: String,
        group3: String,
        group4: String
        }
    ],
    Group_emails:[
        {
         group1: String,
        group2: String,
        group3: String,
        group4: String
        }
    ],

},{timestamps: true} ,{
    collection:  'allocatePanelMember'
} )

module.exports = mongoose.model('allocatePanelMember', PanelMemberSchema);
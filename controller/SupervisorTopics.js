const SupervisorTopics = require ('../models/SupervisorTopics');
const Group = require('../models/Group');
const nodemailer = require("nodemailer");
require('dotenv').config();

//view registered groups
exports.getAllGroups = (req, res) => {
    Group.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};


const SupervisorTopics = require("../models/SupervisorTopics");
const Group = require("../models/Group");
const nodemailer = require("nodemailer");
require("dotenv").config();

//view registered groups
// exports.getAllGroups = (req, res) => {
//     Group.find({})
//         // .limit(10)
//         .sort({ createdAt: -1 })
//         .exec((err, group) => {
//             if (err)
//                 console.log(err);
//             else
//                 res.json(group);
//         });
// };

exports.getAllGroups = (req, res) => {
  Group.find({})
    // .limit(10)
    .sort({ createdAt: -1 })
    .exec((err, group) => {
      if (err) console.log(err);
      else res.json(group);
    });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Group.findById({ _id }).exec((err, group) => {
    if (err) console.log(err);
    else res.json(group);
  });
};

// Unit test

exports.getAllGroupsUnitTest = (req, res) => {
  Group.find({})
    // .limit(10)
    .sort({ createdAt: -1 })
    .exec((err, group) => {
      if (err) console.log(err);
      else res.json(group);
    });
};

exports.getByIdUnitTest = (req, res) => {
  const { id } = "629adff70b9f8733e9ec69d8";
  console.log(id);
  Group.findById({ _id: id }).exec((err, group) => {
    if (err) console.log(err);
    else res.json(group);
  });
};


const SupervisorTopics = require("../models/SupervisorTopics");
const Group = require("../models/Group");
const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  Group.find().exec((err, group) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      existingGroup: group,
    });
  });
});

module.exports = router;

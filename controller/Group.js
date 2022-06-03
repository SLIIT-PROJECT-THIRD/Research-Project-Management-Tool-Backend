/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Group Registration
 */

const Group = require('../models/Group');
const nodemailer = require("nodemailer");
const StudentController = require('../controller/Student');
require('dotenv').config();

/*
Name - Create Group
Date - 22/04/2022
*/

exports.create = (req, res) => {

    const { groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic } = req.body



    if (groupName != null && groupLeader != null && firstMember != null && secondMember != null && thirdMember != null && groupTopic != null) {
        Group.create({ groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic }, (err, group) => {

            if (err) {
                console.log(err);

                if (err.keyPattern.groupName == 1) {
                    res.status(400).json({
                        error: 'Group Name cannot be duplicated!'
                    });
                } else if (err.keyPattern.groupLeader == 1) {
                    res.status(400).json({
                        error: 'Group Leader cannot be duplicated!'
                    });
                } else if (err.keyPattern.firstMember == 1) {
                    res.status(400).json({
                        error: 'First Member cannot be duplicated!'
                    });
                } else if (err.keyPattern.secondMember == 1) {
                    res.status(400).json({
                        error: 'Second Member cannot be duplicated!'
                    });
                } else if (err.keyPattern.thirdMember == 1) {
                    res.status(400).json({
                        error: 'Third Member cannot be duplicated!'
                    });
                }
                else {
                    res.status(400).json({
                        error: 'Unable to create group! Unknown Error!'
                    })
                }
            }
            else {
                res.json(group);

                console.log(groupLeader);
                console.log(StudentController.getByIdInternalCall(groupLeader));

                async function main() {
                    let testAccount = await nodemailer.createTestAccount();
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.MAIL_SERVER_USERNAME,
                            pass: process.env.MAIL_SERVER_PASSWORD
                        }
                    });

                    var mailOptions = {
                        from: 'researchprojectsliit@gmail.com',
                        to: `isurupathumherath@gmail.com, isurupethum2000@gmail.com`,
                        subject: 'Research Project Group Registeation - SLIIT',
                        text:
                            `Hi, 

Your group registration request is submitted successfully.
                            
Group ID: ${groupTopic}
Group Name: ${groupName}
                            
This is an auto generated email. If you have any issue with login to the system feel free to contact the support center 0761714844
                            
Thank You`
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });

                }

                main().catch(console.error);
            }

        });
    }
    else {
        res.status(400).json({
            error: 'Please add required fields!'
        })
    }
}

/*
Name - Display All Groups
Date - 22/04/2022
*/

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

/*
Name - Display Group by ID
Date - 22/04/2022
 */
exports.getById = (req, res) => {
    const { id } = req.params
    console.log(id)
    Group.findById({ _id })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};

/*
Name - Update Group Details
Date - 22/04/2022
 */
exports.update = (req, res) => {
    const { id } = req.params;
    const { groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic } = req.body;
    Group.findOneAndUpdate({ id }, { groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic }, { new: true }).exec((err, group) => {
        if (err)
            console.log(err);
        else
            res.json(group);
    })
}

/*
Name - Delete Group by ID
Date - 23/05/2022
 */
exports.deleteById = (req, res) => {
    const { id } = req.params
    console.log(id)
    Group.findByIdAndDelete({ id })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};
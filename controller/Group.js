/*
    Created by - Isuru Pathum Herath
    On - 22/04/2022
    Description - Group Registration
 */

const Group = require('../models/Group');
const nodemailer = require("nodemailer");
require('dotenv').config();

/*
Name - Create Group
Date - 22/04/2022
*/

exports.create = (req, res) => {

    const { groupId, groupName, groupEmail, groupMembers } = req.body

    console.log(groupMembers.length);

    if (groupMembers.length <= 4 && groupMembers.length > 0) {
        Group.create({ groupId, groupName, groupEmail, groupMembers }, (err, group) => {

            if (err) {
                console.log(err);

                if (err.keyPattern.groupId == 1) {
                    res.status(400).json({
                        error: 'Group ID cannot be duplicated!'
                    });
                } else if (err.keyPattern.groupName == 1) {
                    res.status(400).json({
                        error: 'Group Name cannot be duplicated!'
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
                        to: `${groupEmail}`,
                        subject: 'Research Project Group Registeation - SLIIT',
                        text:
                            `Hi, 

Your group registration request is submitted successfully.
                            
Group ID: ${groupId}
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
    else if (groupMembers.length > 4) {
        res.status(400).json({
            error: 'Please select only maximum 4 members!'
        })
    }
    else if (groupMembers.length <= 0) {
        res.status(400).json({
            error: 'Please select at least 1 group members!'
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
    const { _id } = req.params
    console.log(_id)
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
    const { _id } = req.params;
    const { groupName, groupEmail, groupMembers } = req.body;
    Group.findOneAndUpdate({ _id }, { groupName, groupEmail, groupMembers }, { new: true }).exec((err, group) => {
        if (err)
            console.log(err);
        else
            res.json(group);
    })
}
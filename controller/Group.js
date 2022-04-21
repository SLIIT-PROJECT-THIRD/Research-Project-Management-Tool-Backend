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
                    from: 'quarantine@out.com',
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


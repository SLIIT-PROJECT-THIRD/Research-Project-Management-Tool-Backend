//create by: samuditha

let mongoose = require('mongoose'),
    express = require('express')

 const router = express.Router()

    const req = require('express/lib/request');
    const { type } = require('express/lib/response');
    const res = require('express/lib/response');
    const nodemailer = require("nodemailer");

    let PanelMemberSchema = require('../models/Allocate_pnlMem');

    router.post('/allocate-panel',(req, res, next) =>{
        PanelMemberSchema.create(req.body, (error, data) =>{
            if (error) {
                return next(error)
              } else {
                console.log(data)
                res.json(data)

                const nodemailer = require("nodemailer");

                async function main(){
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.MAIL_SERVER_USERNAME,
                            pass: process.env.MAIL_SERVER_PASSWORD
                        }
                    });

                    var mailOptions = {
                        from: 'researchprojectsliit@gmail.com',
                        to: 'samudithajay@gmail.com',
                        cc: 'samudithahasanth12@gmail.com',
                        subject: 'Panel Member Allocated to Research Project Groups',
                        text:
                          'Hello, this is a test email'
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                }
              }
        })
    });
    router.route('/show').get((req, res) =>{
        PanelMemberSchema.find((error, data) => {
            if (error) {
                return next(error)
              } else {
                res.json(data)
              }
        
        })
    })



    module.exports = router;
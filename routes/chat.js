const express = require('express');
    const chats = require('../models/chat');
    
    const router = express.Router();
    
    //save ticket
    
    router.post('/chat/save', (req, res) => {
    
        let newChat = new chats(req.body);
        // const email = req.body.email;
        // console.log(email);
    
        newChat.save((err, chat) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
    
    
            const refCode = chat.refID;
            // console.log(ticket.refID);
    
            // const nodemailer = require("nodemailer");
    
            // async function main() {
            //     var transporter = nodemailer.createTransport({
            //         service: 'gmail',
            //         auth: {
            //             user: process.env.MAIL_SERVER_USERNAME,
            //             pass: process.env.MAIL_SERVER_PASSWORD
            //         }
            //     });
    
                // var mailOptions = {
                //     from: 'quarantine@out.com',
                //     to: `${email}`,
                //     subject: 'Your Ticket Details',
                //     text: `
                //                 Hi
                            
                //                 Your ticket reference number is ${refCode}
                //                 Thank you for contacting us. We will get back to you soon.
                //             `
    
                // };
    
                // transporter.sendMail(mailOptions, function (error, info) {
                //     if (error) {
                //         console.log(error);
                //     } else {
                //         console.log('Email sent: ' + info.response);
                //     }
                // });
    
            // }
    
            // main().catch(console.error);
    
            return res.status(200).json({
                success: "Message send successfully"
    
            });
    
        });
    
    });
    
    //get tickets
    router.get('/chats', (req, res) => {
        chats.find().exec((err, chats) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                existingChats: chats
            });
        });
    });
    
    //get a specific ticket
    router.get("/chat/:id", (req, res) => {
        let chatId = req.params.id;
    
        chats.findById(chatId, (err, chat) => {
            if (err) {
                return res.status(400).json({ success: false, err })
            }
    
            return res.status(200).json({
                success: true,
                chat
            });
        });
    });
    
    //update tickets
    
    router.put('/chat/update/:id', (req, res) => {
        chats.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            (err, chat) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                }
                return res.status(200).json({
                    success: "Updated Successfully"
                });
            }
        );
    });
    
    //delete tickets
    
    router.delete('/chat/delete/:id', (req, res) => {
        chats.findByIdAndRemove(req.params.id).exec((err, deletedChat) => {
            if (err)
                return res.status(400).json({
                    message: "Delete Unsuccessful", err
                });
    
            return res.json({
                message: "Delete Successful", deletedChat
            });
        });
    });
    
    //create the PDF
    
    // router.post('/create-pdf', (req, res) => {
    //     pdf.create(pdfReport(req.body), {}).toFile('pdfsub.pdf', (err) => {
    //         if (err) {
    //             res.send(Promise.reject());
    //         }
    
    //         res.send(Promise.resolve());
    //     });
    // });
    
    //get the PDF
    
    // router.get('/fetch-pdf', (req, res) => {
    //     res.sendFile('pdfsub.pdf', { root: 'Quarantine-Center-Management/server/pdfsub.pdf' });
    // })
    
    
    
    module.exports = router;
    
    
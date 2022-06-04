/*created by samuditha*/

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router()

const multer = require('multer');
const stu_upload= require('../middleware/studentUpload');

let StudentFile = require('../models/studentFileupload');

router.post('/stu-upload-files', stu_upload.array('studentfileCollection', 2), (req, res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/stu_uploads/' + req.files[i].filename)
    }
    const file = new StudentFile({
        _id: new mongoose.Types.ObjectId(),
        studentfileCollection: reqFiles
    });
    file.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            fileCreated: {
                _id: result._id,
                studentfileCollection: result.studentfileCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
router.get("/stu_files", (req, res, next) => {
    StudentFile.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            files: data
        });
    });
});
module.exports = router;

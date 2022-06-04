
/*created by samuditha*/

let mongoose = require('mongoose'),
express = require('express'),
router = express.Router()

const multer = require('multer');
const upload = require('../middleware/upload');

let File = require('../models/fileUpload');

router.post('/upload-files', upload.array('fileCollection', 2), (req, res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/uploads/' + req.files[i].filename)
    }
    const file = new File({
        _id: new mongoose.Types.ObjectId(),
        fileCollection: reqFiles
    });
    file.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            fileCreated: {
                _id: result._id,
                fileCollection: result.fileCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
router.get("/files", (req, res, next) => {
    File.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            files: data
        });
    });
});

/*UNIT TEST*/
exports.getByIdfILEUnitTest = (req, res) =>{
    const id ="62931d1cabc58a5c7ed330ed";
    File.findById({_id: id})
    .exec((error, data) => {
      if(error)
        return(error);
      else
        return(data);
    });
  };
  
  exports.getAllFileUnitTest = (req, res) => {
    File.find({})
    .exec((error, data) => {
      if(error)
      console.log(error);
      else
      res.json(data);
    })
  }

module.exports = router;

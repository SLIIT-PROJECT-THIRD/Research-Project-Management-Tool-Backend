//created by samuditha

const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'stu_uploads/')
    },
    filename: (req, file, cb) =>{
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
});

var stu_upload = multer ({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "application/msword" ||
            file.mimetype == "officedocument.wordprocessingml.document" ||
            file.mimetype == "video/mp4" ||
            file.mimetype == "application/pdf" ||
            file.mimetype == "application/vnd.ms-powerpoint" ||
            file.mimetype == "application/vnd.rar" ||
            file.mimetype == "text/plain" ||
            file.mimetype == "application/xml" ||
            file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            file.mimetype == "application/zip"
        ){
            callback(null, true)
        }else{
            console.log('This file type is not supported!')
            callback(null, false)
        }
    }
});
module.exports = stu_upload
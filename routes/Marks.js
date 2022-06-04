//create by: samuditha

let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()
   

const req = require('express/lib/request');
const { type } = require('express/lib/response');
const res = require('express/lib/response');
    //admin model
let MarksSchema = require('../models/Marks');
    //CREATE Submission type
 router.post('/create-mark', (req, res, next) => {
    MarksSchema .create(req.body, (error, data) => {

        const modelData = new ModelData({
            _id: new mongoose.Types.ObjectId(),
            Marks: user_id,
            Marks: req.body.Marks.map(Marks => {
                return {
                    _id: new mongoose.Types.ObjectId(),
                    Group_Name:  Marks.Group_Name,
                    Mark: personalData.Mark,
                    Status: personalData.Status,
                };
            })
           
        });
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
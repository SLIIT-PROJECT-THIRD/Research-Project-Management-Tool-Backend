//create by: samuditha

let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()
   

const req = require('express/lib/request');
const { type } = require('express/lib/response');
const res = require('express/lib/response');
    //admin model
let AdminSchema = require('../models/Admin_st');
    //CREATE Submission type
 router.post('/create-submission', (req, res, next) => {
  AdminSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
//READ Submission type
router.route('/').get((req, res) => {
    AdminSchema.find((error, data) => {
      
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
})
//Get single submission type
router.route('/edit-submission/:id').get((req, res) => {
  AdminSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
          } else {
            res.json(data)
          }
    })
})
//Update submission type
router.route('/update-submission/:id').put((req, res, next) => {
  AdminSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Submission type update successfully !')
    }
    })
}) 
//DELETE submission type
router.route('/delete-submission/:id').delete((req, res, next ) =>{
  AdminSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
          }
    })
})

/*UNIT TESTS*/

exports.getByIdSubTypeUnitTest = (req, res) =>{
  const id ="6298d3fc550b9fad85d6cf20";
  AdminSchema.findById({_id: id})
  .exec((error, data) => {
    if(error)
      return(error);
    else
      return(data);
  });
};

exports.getAllSubTypeUnitTest = (req, res) => {
  AdminSchema.find({})
  .exec((error, data) => {
    if(error)
    console.log(error);
    else
    res.json(data);
  })
}
module.exports = router;
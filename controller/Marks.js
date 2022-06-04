const Marks = require("../models/Marks");
const ModelData = require("../models/Marks");

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
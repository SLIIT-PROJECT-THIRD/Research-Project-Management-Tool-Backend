const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MarksSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Marks: [
        {
            id : String,
            Group_Name: String,
            Mark: Number,
            Status: String

        }
    ]
}, {
    collection: 'Marks'
})
module.exports = mongoose.model('Marks', MarksSchema)
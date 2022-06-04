
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stufileSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    studentfileCollection: {
        type: Array
    }
}, {
    collection: 'StudentFile'
})
module.exports = mongoose.model('StudentFile', stufileSchema)
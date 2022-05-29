const mongoose = require('mongoose');

const SupervisorTopicsSchema = new mongoose.Schema({

    supervisorId: {
        type: String,
        required: true
    },
    supervisorName: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    topicId: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    topicCategory: {
        type: String,
        required: true
    },
    topicSubmission: {
        type: String,
        required: true
    }, // links docs regarding selected topic
    topicStatus: {
        type: String,
        default: "Pending"
    }, // accept or reject
    teamMembers: {
        type: String,
        required: true
    },
    regNumbers: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    }, // send topic accept / reject message
    messageId: {
        type: String,
        required: true
    },
    supervisorMessage: {
        type: String,
        required: true
    },
    studentMessage: {
        type: String,
        required: true
    },
    messageStatus: {
        type: String,
        required: true
    },
    

}, { timestamps: true });

module.exports = mongoose.model('SupervisorTopics', SupervisorTopicsSchema);
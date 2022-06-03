/*
    Created by - Isuru Pathum Herath
    On - 03/06/2022
    Description - Supervisor Group
 */

const SupervisorGroup = require('../models/SupervisorGroup');
const Group = require('../models/SupervisorGroup');

/*
Name - Request Supervisor
Date - 03/06/2022
*/

exports.create = (req, res) => {

    const { groupId, supervisorId, coSupervisorId, status } = req.body

    if (groupId != null && supervisorId != null && coSupervisorId != null && status != null) {
        SupervisorGroup.create({ groupId, supervisorId, coSupervisorId, status }, (err, supervisorGroup) => {

            if (err) {
                console.log(err);

                if (err.keyPattern.groupId == 1) {
                    res.status(400).json({
                        error: 'You have already request a Supervisor!'
                    });
                } else {
                    res.status(400).json({
                        error: 'Unable to send Request! Unknown Error!'
                    })
                }
            }
            else {
                res.json(supervisorGroup);
            }

        });
    }
    else {
        res.status(400).json({
            error: 'Please add required fields!'
        })
    }
}

/*
Name - Display All Groups
Date - 22/04/2022
*/

exports.getAllGroups = (req, res) => {
    Group.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};

/*
Name - Display Group by ID
Date - 22/04/2022
 */
exports.getById = (req, res) => {
    const { id } = req.params
    console.log(id)
    Group.findById({ _id })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};

/*
Name - Display by Student Id
Date - 22/04/2022
 */
exports.getByStudentId = (req, res) => {
    const { id } = req.params
    console.log(id)
    Group.findOne({ groupLeader: id })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};

/*
Name - Update Group Details
Date - 22/04/2022
 */
exports.update = (req, res) => {
    const { id } = req.params;
    const { groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic } = req.body;
    Group.findOneAndUpdate({ id }, { groupName, groupLeader, firstMember, secondMember, thirdMember, groupTopic }, { new: true }).exec((err, group) => {
        if (err)
            console.log(err);
        else
            res.json(group);
    })
}

/*
Name - Delete Group by ID
Date - 23/05/2022
 */
exports.deleteById = (req, res) => {
    const { id } = req.params
    console.log(id)
    Group.findByIdAndDelete({ _id: id })
        .exec((err, group) => {
            if (err)
                console.log(err);
            else
                res.json(group);
        });
};
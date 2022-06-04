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
Name - Display All Supervisor and Co-Supervisors
Date - 03/06/2022
*/

exports.getAllSupervisorsAndCoSupervisors = (req, res) => {
    SupervisorGroup.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, supervisor) => {
            if (err)
                console.log(err);
            else
                res.json(supervisor);
        });
};

/*
Name - Display Supervisor Request by ID
Date - 03/06/2022
 */
exports.getById = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findById({ _id })
        .exec((err, supervisor) => {
            if (err)
                console.log(err);
            else
                res.json(supervisor);
        });
};

/*
Name - Display by Group Id
Date - 03/06/2022
 */
exports.getByGroupId = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findOne({ groupId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                console.log(err);
            else
                res.json(groupSupervisor);
        });
};

/*
Name - Display by Supervisor id
Date - 03/06/2022
 */
exports.getBySupervisorId = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findOne({ supervisorId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                console.log(err);
            else
                res.json(groupSupervisor);
        });
};

/*
Name - Display by Co-Supervisor Id
Date - 03/06/2022
 */
exports.getByCoSupervisorId = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findOne({ coSupervisorId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                console.log(err);
            else
                res.json(groupSupervisor);
        });
};

/*
Name - Display by Status
Date - 03/06/2022
 */
exports.getByStatus = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findOne({ status: id })
        .exec((err, groupSupervisor) => {
            if (err)
                console.log(err);
            else
                res.json(groupSupervisor);
        });
};


/*
Name - Update Supervisor Group Details
Date - 03/06/2022
 */
exports.update = (req, res) => {
    const { id } = req.params;
    const { groupId, supervisorId, coSupervisorId, status } = req.body;
    SupervisorGroup.findOneAndUpdate({ id }, { groupId, supervisorId, coSupervisorId, status }, { new: true }).exec((err, supervisorGroup) => {
        if (err)
            console.log(err);
        else
            res.json(supervisorGroup);
    })
}

/*
Name - Delete Supervisor Group by ID
Date - 03/06/2022
 */
exports.deleteById = (req, res) => {
    const { id } = req.params
    console.log(id)
    SupervisorGroup.findByIdAndDelete({ _id: id })
        .exec((err, supervisorGroup) => {
            if (err)
                console.log(err);
            else
                res.json(supervisorGroup);
        });
};

/*
Name - UNIT TEST
Date - 04/06/2022
*/

exports.getAllSupervisorsAndCoSupervisorsUnitTest = (req, res) => {
    SupervisorGroup.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, supervisor) => {
            if (err)
                res.json(err);
            else
                res.json(supervisor);
        });
};

exports.getByIdUnitTest = (req, res) => {
    const { id } = "629b204c6b5c68b7ce69be18;"
    console.log(id)
    SupervisorGroup.findById({ _id: id })
        .exec((err, supervisor) => {
            if (err)
                res.json(err);
            else
                res.json(supervisor);
        });
};

exports.getByGroupIdUnitTest = (req, res) => {
    const { id } = "629b201d6b5c68b7ce69be07";
    console.log(id)
    SupervisorGroup.findOne({ groupId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                res.json(err);
            else
                res.json(groupSupervisor);
        });
};

exports.getBySupervisorIdUnitTest = (req, res) => {
    const { id } = "62936fb6b8bfb3c816817b88";
    console.log(id)
    SupervisorGroup.findOne({ supervisorId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                res.json(err);
            else
                res.json(groupSupervisor);
        });
};

exports.getByCoSupervisorIdUnitTest = (req, res) => {
    const { id } = "62937597b8bfb3c816817ba5";
    console.log(id)
    SupervisorGroup.findOne({ coSupervisorId: id })
        .exec((err, groupSupervisor) => {
            if (err)
                res.json(err);
            else
                res.json(groupSupervisor);
        });
};

exports.getByStatusUnitTest = (req, res) => {
    const { id } = false;
    console.log(id)
    SupervisorGroup.findOne({ status: id })
        .exec((err, groupSupervisor) => {
            if (err)
                res.json(err);
            else
                res.json(groupSupervisor);
        });
};
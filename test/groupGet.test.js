require("dotenv").config();
const mongoose = require("mongoose");
const Group = require('../controller/Group');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrieve Group All", async () => {
        const group = await Group.getAllGroupsUnitTest();
        expect(group != null);
    });

    test("Get Group by group Id", async () => {
        const group = await Group.getByIdUunitTest();
        expect(group != null);
    });

    test("Get Group by Student Id", async () => {
        const group = await Group.getByStudentIdUnitTest();
        expect(group != null);
    });

});
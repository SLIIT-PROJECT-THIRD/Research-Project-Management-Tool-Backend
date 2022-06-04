require("dotenv").config();
const mongoose = require("mongoose");
const SupervisorTopic = require('../controller/SupervisorTopics');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrieve Group All", async () => {
        const group = await SupervisorTopic.getAllGroupsUnitTest();
        expect(group != null);
    });

    test("Get Group by group Id", async () => {
        const group = await SupervisorTopic.getByIdUnitTest();
        expect(group != null);
    });
});
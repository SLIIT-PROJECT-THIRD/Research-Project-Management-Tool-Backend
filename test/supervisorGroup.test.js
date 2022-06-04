require("dotenv").config();
const mongoose = require("mongoose");
const SupervisorGroup = require('../controller/SupervisorGroup');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrieve All", async () => {
        const group = await SupervisorGroup.getAllSupervisorsAndCoSupervisorsUnitTest();
        expect(group != null);
    });

    test("Get by Id", async () => {
        const group = await SupervisorGroup.getByIdUnitTest();
        expect(group != null);
    });

    test("Get by Group ID", async () => {
        const group = await SupervisorGroup.getByGroupIdUnitTest();
        expect(group != null);
    });

    test("Get by Supervisor Id", async () => {
        const group = await SupervisorGroup.getBySupervisorIdUnitTest();
        expect(group != null);
    });

    test("Get by Co Supervisor id", async () => {
        const group = await SupervisorGroup.getByCoSupervisorIdUnitTest();
        expect(group != null);
    });

    test("Get by Status", async () => {
        const group = await SupervisorGroup.getByStatusUnitTest();
        expect(group != null);
    });
});
require("dotenv").config();
const mongoose = require("mongoose");
const AdminSchema = require('../routes/Admin_st');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.createConnection(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrive Submission Type Data By Id", async () => {
        const AdminSchema = await AdminSchema.getByIdSubTypeUnitTest();
        expect(AdminSchema != null);
    });

    test("Get All Submission Types", async () => {
        const AdminSchema = await AdminSchema.getAllSubTypeUnitTest();
        expect(AdminSchema !=null);
    })

});
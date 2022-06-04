require("dotenv").config();
const mongoose = require("mongoose");
const Student = require('../controller/Student');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrieve Student By Id", async () => {
        const student = await Student.getByIdUnitTest();
        expect(student != null);
    });

    test("Retrieve Student by Username and Passowrd - Auth User", async () => {
        const student = await Student.getByUsernameAndPasswordUnitTest();
        expect(student != null);
    });

    test("Get All Students", async () => {
        const student = await Student.getAllStudentUnitTest();
        expect(student != null);
    });

});
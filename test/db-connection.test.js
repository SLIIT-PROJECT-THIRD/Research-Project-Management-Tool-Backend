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
        const id = "629adf790b9f8733e9ec69cf";
        const student = await Student.getByIdUnitTest();
        expect(student != null);
    });

});
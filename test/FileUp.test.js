require("dotenv").config();
const mongoose = require("mongoose");
const File = require('../routes/fileUpload');

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.createConnection(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrive File By Id", async () => {
        const File = await File.getByIdfILEUnitTest();
        expect(File != null);
    });

    test("Get All Files", async () => {
        const File = await File.getAllFileUnitTest();
        expect(File !=null);
    })

});
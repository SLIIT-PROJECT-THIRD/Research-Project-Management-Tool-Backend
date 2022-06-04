const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const groupRoute = require('./routes/Group');
const studentRoute = require('./routes/Student');
const supervisorGroup = require('./routes/SupervisorGroup');
const SubmissionRoute = require('./routes/Admin_st');
const adminRoute = require('./routes/uprofile');
const staffRoute = require('./routes/staff');
const uploads = require('./middleware/upload');
const fileUpload = require('./routes/fileUpload');
const supervisorTopicsRouter = require('./routes/SupervisorTopics');
const test = require('./routes/test');
const AllocatePanel = require('./routes/Allocate_panel');
const studentFileupload = require('./routes/studentFileUpload');
const stu_upload = require('./middleware/studentUpload');
//const Marks = require('./routes/Marks');

// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Default Route
app.get('/', (req, res) => {
    res.send("<br><br><center><h1>Research management Tool - SLIIT- 2022</h1><h3>LIVE<h3></center>");
});

// Route Middleware
app.use('/group', groupRoute);
app.use('/student', studentRoute);
app.use('/supervisor-group', supervisorGroup);
app.use('/admin', SubmissionRoute);
app.use('/admin', adminRoute);
app.use('/staff', staffRoute);
app.use('/uploads', express.static('uploads'));
app.use('/supervisorTopics', supervisorTopicsRouter);
app.use('/admin',fileUpload);
app.use('/admin',AllocatePanel);
app.use('/admin',studentFileupload);
app.use('/stu_uploads', express.static('stu_upload'));
app.use('/uploads', express.static('uploads'))
app.use('/admin', fileUpload);
//app.use('/admin',Marks);
app.use( test);

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
